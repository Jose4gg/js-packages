import { Theme, ThemeName } from '@nayya-com/wardrobe';

export const getThemeObject = (theme: Theme) => {
  const styleProps = theme.config.selectInput;

  const normalState = {
    display: styleProps.display,
    fontFamily: styleProps.fontFamily,
    height: styleProps.height,
    border: styleProps.border,
    borderRadius: styleProps.borderRadius,
    iconColor: styleProps.iconColor,
    labelColor: styleProps.labelColor,
    labelFontSize: styleProps.labelFontSize,
    helperTextColor: styleProps.helperTextColor,
    textColor: styleProps.textColor,
    placeholderColor: styleProps.placeholderColor,
    marginTop: styleProps.marginTop,
    valueTopOffset: styleProps.valueTopOffset,
    multiSelectMarginTop: styleProps.multiSelectMarginTop,
    inputMargin: styleProps.inputMargin,
  };

  return {
    normal: normalState,
    focus: styleProps.state.focus,
    warning: styleProps.state.warning,
    error: styleProps.state.error,
    disabled: styleProps.state.disabled,
  };
};

export const getInputPadding = (theme: ThemeName) => {
  if (theme === 'adp') {
    return '0 0.75rem';
  }

  return '0.75rem';
};
