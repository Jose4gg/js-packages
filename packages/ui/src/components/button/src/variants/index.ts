import { Theme, ThemeConfig } from '@nayya-com/wardrobe';

import { variantPadding } from './sizes';

export const getCommonStyles = (theme: Theme, mini: boolean, fullWidth: boolean) => {
  const themeConfig: ThemeConfig = theme.config;
  const mode = mini ? 'mini' : 'common';
  return {
    fontSize: themeConfig.button.fonts[mode].fontSize,
    fontWeight: themeConfig.button.fonts[mode].fontWeight,
    width: fullWidth ? '100%' : 'auto',
    padding: variantPadding(mini, fullWidth),
    borderRadius: themeConfig.button.sizes[mode].borderRadius,
    marketingBorderRadius: themeConfig.button.sizes[mode].marketingBorderRadius,
  };
};

export const getThemeObject = (mode: 'dark' | 'light', theme: Theme) => {
  const styleProps = theme.config.button;

  const normal = {
    base: {
      backgroundColor: styleProps.backgroundColor[mode].normal,
      textColor: styleProps.textColor[mode].normal,
    },
    outlined: {
      backgroundColor: styleProps.backgroundColor[mode].outlined,
      textColor: styleProps.textColor[mode].outlined,
      border: `${styleProps.sizes.common.border} ${styleProps.borderColor[mode].outlined}`,
    },
    link: {
      backgroundColor: styleProps.backgroundColor[mode].link,
      textColor: styleProps.textColor[mode].link,
    },
    text: {
      backgroundColor: styleProps.backgroundColor[mode].text,
      textColor: styleProps.textColor[mode].text,
    },
  };

  const hover = {
    base: {
      backgroundColor: styleProps.hoveredBackgroundColor[mode].normal,
      textColor: styleProps.hoveredTextColor[mode].normal,
    },
    outlined: {
      backgroundColor: styleProps.hoveredBackgroundColor[mode].outlined,
      textColor: styleProps.hoveredTextColor[mode].outlined,
      borderColor: styleProps.hoveredBorderColor[mode].outlined,
    },
    link: {
      backgroundColor: styleProps.hoveredBackgroundColor[mode].link,
      textColor: styleProps.hoveredTextColor[mode].link,
    },
    text: {
      backgroundColor: styleProps.hoveredBackgroundColor[mode].text,
      textColor: styleProps.hoveredTextColor[mode].text,
    },
  };

  const active = {
    base: {
      backgroundColor: styleProps.activeBackgroundColor[mode].normal,
      textColor: styleProps.activeTextColor[mode].normal,
    },
    outlined: {
      backgroundColor: styleProps.activeBackgroundColor[mode].outlined,
      textColor: styleProps.activeTextColor[mode].outlined,
      borderColor: styleProps.activeBorderColor[mode].outlined,
    },
    link: {
      backgroundColor: styleProps.activeBackgroundColor[mode].link,
      textColor: styleProps.activeTextColor[mode].link,
    },
    text: {
      backgroundColor: styleProps.activeBackgroundColor[mode].text,
      textColor: styleProps.activeTextColor[mode].text,
    },
  };

  const loading = {
    base: {
      backgroundColor: styleProps.loadingBackgroundColor[mode].normal,
      textColor: styleProps.loadingTextColor[mode].normal,
    },
    outlined: {
      backgroundColor: styleProps.loadingBackgroundColor[mode].outlined,
      textColor: styleProps.loadingTextColor[mode].outlined,
      borderColor: styleProps.loadingBorderColor[mode].outlined,
    },
    link: {
      backgroundColor: styleProps.loadingBackgroundColor[mode].link,
      textColor: styleProps.loadingTextColor[mode].link,
    },
    text: {
      backgroundColor: styleProps.loadingBackgroundColor[mode].text,
      textColor: styleProps.loadingTextColor[mode].text,
    },
  };

  const disabled = {
    base: {
      backgroundColor: styleProps.disabledBackgroundColor[mode].normal,
      textColor: styleProps.disabledTextColor[mode].normal,
    },
    outlined: {
      backgroundColor: styleProps.disabledBackgroundColor[mode].outlined,
      textColor: styleProps.disabledTextColor[mode].outlined,
      borderColor: styleProps.disabledBorderColor[mode].outlined,
    },
    link: {
      backgroundColor: styleProps.disabledBackgroundColor[mode].link,
      textColor: styleProps.disabledTextColor[mode].link,
    },
    text: {
      backgroundColor: styleProps.disabledBackgroundColor[mode].text,
      textColor: styleProps.disabledTextColor[mode].text,
    },
  };

  return {
    normal,
    hover,
    active,
    loading,
    disabled,
  };
};
