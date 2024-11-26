import { Theme } from '@nayya-com/wardrobe';

export const getThemeObject = (theme: Theme) => {
  const styleProps = theme.config.slider;

  const {
    containerPadding,
    verticalPadding,
    horizontalPadding,
    thumbWidth,
    thumbHeight,
    trackHeight,
    trackWidth,
    border,
    trackBorder,
    borderRadius,
    fontSize,
    fontFamily,
    fill,
    background,
    zIndex,
    thumbZIndex,
  } = styleProps;

  return {
    containerPadding,
    verticalPadding,
    horizontalPadding,
    thumbHeight,
    thumbWidth,
    trackHeight,
    trackWidth,
    border,
    trackBorder,
    borderRadius,
    fontSize,
    fontFamily,
    fill,
    background,
    zIndex,
    thumbZIndex,
  };
};
