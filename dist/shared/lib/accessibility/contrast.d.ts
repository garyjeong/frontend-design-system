export declare function parseRGB(cssColor: string): [number, number, number] | null;
export declare function relativeLuminance(rgb: [number, number, number]): number;
export declare function contrastRatio(colorA: string, colorB: string): number;
export declare function runContrastChecks(root?: Element): {
    el: Element;
    ratio: number;
    color: string;
    background: string;
    text: string;
}[];
export default runContrastChecks;
