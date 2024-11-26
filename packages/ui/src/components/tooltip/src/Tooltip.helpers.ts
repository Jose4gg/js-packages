export const TooltipGutter = 7;

export const getTooltipOutOfBounds = (
  contentBounding: DOMRect,
): { top: boolean; right: boolean; bottom: boolean; left: boolean } => {
  const tooltipOutOfBoundsMap = {
    top: contentBounding.top < 0,
    right: contentBounding.right > window.innerWidth,
    bottom: contentBounding.bottom > window.innerHeight,
    left: contentBounding.left < 0,
  };

  return tooltipOutOfBoundsMap;
};

export const updateTooltipPosition = (
  contentBounding: DOMRect,
  triggerBounding: DOMRect,
  tooltipPosition: { x: number; y: number },
): { x: number; y: number } => {
  const outOfBounds = getTooltipOutOfBounds(contentBounding);

  const updatedPosition = { x: tooltipPosition.x, y: tooltipPosition.y };
  if (outOfBounds.top) {
    updatedPosition.y = triggerBounding.height + TooltipGutter;
  }

  if (outOfBounds.right) {
    updatedPosition.x = 0 - contentBounding.width - TooltipGutter;
  }

  if (outOfBounds.bottom) {
    updatedPosition.y = 0 - contentBounding.height - TooltipGutter;
  }

  if (outOfBounds.left) {
    updatedPosition.x = triggerBounding.width + TooltipGutter;
  }
  return updatedPosition;
};
