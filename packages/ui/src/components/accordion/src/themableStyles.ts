import { adpTheme, nayyaTheme, upwiseTheme } from '@nayya-com/wardrobe';

export const getThemeObject = (theme: 'adp' | 'nayya' | 'upwise') => {
  const themeConfig = {
    nayya: nayyaTheme.config,
    adp: adpTheme.config,
    upwise: upwiseTheme.config,
  };

  const styleProps = themeConfig[theme].accordion;

  return {
    borderRadius: styleProps.borderRadius,
    border: styleProps.border,
    headerBorderTop: styleProps.headerBorderTop,
    headerColor: styleProps.headerColor,
    iconColor: styleProps.iconColor,
    lastItemBorderBottom: styleProps.lastItemBorderBottom,
    panelBorderTop: styleProps.panelBorderTop,
  };
};
