import { Theme } from '@nayya-com/wardrobe';

export const getThemeObject = (theme: Theme) => {
  const styleProps = theme.config.tooltip;

  return {
    fontFamily: styleProps.fontFamily,
    textColor: styleProps.textColor,
  };
};
