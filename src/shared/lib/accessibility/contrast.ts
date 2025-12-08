// Simple WCAG contrast checker utilities
export function parseRGB(cssColor: string): [number, number, number] | null {
  if (!cssColor) return null;
  const rgbaMatch = cssColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (rgbaMatch) {
    return [Number(rgbaMatch[1]), Number(rgbaMatch[2]), Number(rgbaMatch[3])];
  }
  // hex fallback
  const hexMatch = cssColor.match(/^#([0-9a-f]{3,6})$/i);
  if (hexMatch) {
    let hex = hexMatch[1];
    if (hex.length === 3) {
      hex = hex.split('').map((c) => c + c).join('');
    }
    const int = parseInt(hex, 16);
    const r = (int >> 16) & 255;
    const g = (int >> 8) & 255;
    const b = int & 255;
    return [r, g, b];
  }
  return null;
}

function srgbToLinear(c: number) {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

export function relativeLuminance(rgb: [number, number, number]) {
  const [r, g, b] = rgb;
  return 0.2126 * srgbToLinear(r) + 0.7152 * srgbToLinear(g) + 0.0722 * srgbToLinear(b);
}

export function contrastRatio(colorA: string, colorB: string) {
  const a = parseRGB(colorA);
  const b = parseRGB(colorB);
  if (!a || !b) return 1;
  const La = relativeLuminance(a);
  const Lb = relativeLuminance(b);
  const light = Math.max(La, Lb);
  const dark = Math.min(La, Lb);
  return (light + 0.05) / (dark + 0.05);
}

function isVisible(el: Element) {
  const r = (el as HTMLElement).getBoundingClientRect();
  return r.width > 0 && r.height > 0;
}

function findEffectiveBackground(el: Element | null): string {
  let node: Element | null = el;
  while (node && node !== document.documentElement) {
    const bg = window.getComputedStyle(node).backgroundColor;
    if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') return bg;
    node = node.parentElement;
  }
  return window.getComputedStyle(document.documentElement).backgroundColor || 'rgb(255,255,255)';
}

export function runContrastChecks(root: Element = document.body) {
  if (typeof window === 'undefined' || !root) return [];
  const warnings: Array<{ el: Element; ratio: number; color: string; background: string; text: string }> = [];
  const all = Array.from(root.querySelectorAll<HTMLElement>('*'));
  for (const el of all) {
    if (!isVisible(el)) continue;
    const text = el.innerText || el.textContent || '';
    if (!text || text.trim().length === 0) continue;
    const style = window.getComputedStyle(el);
    const color = style.color || 'rgb(0,0,0)';
    const bg = findEffectiveBackground(el);
    const ratio = contrastRatio(color, bg);
    // determine large text: >=18px or >=14px bold
    const fontSize = parseFloat(style.fontSize || '16');
    const fontWeight = parseInt(style.fontWeight || '400', 10) || 400;
    const isLarge = fontSize >= 18 || (fontSize >= 14 && fontWeight >= 700);
    const threshold = isLarge ? 3 : 4.5;
    if (ratio < threshold) {
      warnings.push({ el, ratio, color, background: bg, text: text.trim().slice(0, 60) });
    }
  }
  if (warnings.length > 0) {
    console.warn(`[contrast-checker] Found ${warnings.length} low-contrast elements (ratio < threshold):`);
    warnings.slice(0, 20).forEach((w) => {
      console.warn(`- "${w.text}" ratio=${w.ratio.toFixed(2)} color=${w.color} bg=${w.background}`, w.el);
    });
  } else {
    console.info('[contrast-checker] No low-contrast issues found in story root.');
  }
  return warnings;
}

export default runContrastChecks;


