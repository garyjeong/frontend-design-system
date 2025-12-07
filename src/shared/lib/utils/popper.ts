export type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';

export interface PopperOptions {
  placement?: Placement;
  offset?: number;
  flip?: boolean;
  shift?: boolean;
}

export interface PopperPosition {
  top: number;
  left: number;
  placement: Placement;
}

/**
 * Calculate the position for a popper element relative to a reference element.
 * This is a simplified version of popper positioning logic.
 */
export const computePopperPosition = (
  referenceElement: HTMLElement,
  popperElement: HTMLElement,
  options: PopperOptions = {}
): PopperPosition => {
  const {
    placement = 'bottom',
    offset = 8,
    flip = true,
    shift = false,
  } = options;

  const referenceRect = referenceElement.getBoundingClientRect();
  const popperRect = popperElement.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  let top = 0;
  let left = 0;
  let finalPlacement = placement;

  // Calculate base position based on placement
  const placements: Record<Placement, () => void> = {
    'top': () => {
      top = referenceRect.top - popperRect.height - offset;
      left = referenceRect.left + (referenceRect.width - popperRect.width) / 2;
    },
    'top-start': () => {
      top = referenceRect.top - popperRect.height - offset;
      left = referenceRect.left;
    },
    'top-end': () => {
      top = referenceRect.top - popperRect.height - offset;
      left = referenceRect.right - popperRect.width;
    },
    'bottom': () => {
      top = referenceRect.bottom + offset;
      left = referenceRect.left + (referenceRect.width - popperRect.width) / 2;
    },
    'bottom-start': () => {
      top = referenceRect.bottom + offset;
      left = referenceRect.left;
    },
    'bottom-end': () => {
      top = referenceRect.bottom + offset;
      left = referenceRect.right - popperRect.width;
    },
    'left': () => {
      top = referenceRect.top + (referenceRect.height - popperRect.height) / 2;
      left = referenceRect.left - popperRect.width - offset;
    },
    'left-start': () => {
      top = referenceRect.top;
      left = referenceRect.left - popperRect.width - offset;
    },
    'left-end': () => {
      top = referenceRect.bottom - popperRect.height;
      left = referenceRect.left - popperRect.width - offset;
    },
    'right': () => {
      top = referenceRect.top + (referenceRect.height - popperRect.height) / 2;
      left = referenceRect.right + offset;
    },
    'right-start': () => {
      top = referenceRect.top;
      left = referenceRect.right + offset;
    },
    'right-end': () => {
      top = referenceRect.bottom - popperRect.height;
      left = referenceRect.right + offset;
    },
  };

  placements[placement]();

  // Flip if needed
  if (flip) {
    if (finalPlacement.startsWith('top') && top < 0) {
      finalPlacement = finalPlacement.replace('top', 'bottom') as Placement;
      placements[finalPlacement]();
    } else if (finalPlacement.startsWith('bottom') && top + popperRect.height > viewportHeight) {
      finalPlacement = finalPlacement.replace('bottom', 'top') as Placement;
      placements[finalPlacement]();
    } else if (finalPlacement.startsWith('left') && left < 0) {
      finalPlacement = finalPlacement.replace('left', 'right') as Placement;
      placements[finalPlacement]();
    } else if (finalPlacement.startsWith('right') && left + popperRect.width > viewportWidth) {
      finalPlacement = finalPlacement.replace('right', 'left') as Placement;
      placements[finalPlacement]();
    }
  }

  // Shift if needed
  if (shift) {
    if (left < 0) {
      left = offset;
    } else if (left + popperRect.width > viewportWidth) {
      left = viewportWidth - popperRect.width - offset;
    }

    if (top < 0) {
      top = offset;
    } else if (top + popperRect.height > viewportHeight) {
      top = viewportHeight - popperRect.height - offset;
    }
  }

  return {
    top: top + window.scrollY,
    left: left + window.scrollX,
    placement: finalPlacement,
  };
};

/**
 * Hook-like function to update popper position
 */
export const updatePopperPosition = (
  referenceElement: HTMLElement | null,
  popperElement: HTMLElement | null,
  options: PopperOptions = {}
): PopperPosition | null => {
  if (!referenceElement || !popperElement) {
    return null;
  }

  return computePopperPosition(referenceElement, popperElement, options);
};

