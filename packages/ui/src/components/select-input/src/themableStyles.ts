import { Theme } from '@nayya-com/wardrobe';

export const getThemeObject = (theme: Theme) => {
  const styleProps = theme.config.selectInput;

  const focusProps = styleProps.state.focus;
  const warningProps = styleProps.state.warning;
  const errorProps = styleProps.state.error;
  const disabledProps = styleProps.state.disabled;

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
  };

  const focusState = {
    focusBorder: focusProps.border,
    focusIconColor: focusProps.iconColor,
    listItemFocusBackgroundColor: focusProps.listItemFocusBackgroundColor,
  };

  const warningState = {
    warningBorder: warningProps.border,
    warningIconColor: warningProps.iconColor,
    warningHelperTextColor: warningProps.helperTextColor,
  };

  const errorState = {
    errorBorder: errorProps.border,
    errorIconColor: errorProps.iconColor,
    errorHelperTextColor: errorProps.helperTextColor,
  };

  const disabledState = {
    disabledBorder: disabledProps.border,
    disabledBackgroundColor: disabledProps.backgroundColor,
    disabledIconColor: disabledProps.iconColor,
    disabledLabelColor: disabledProps.labelColor,
    disabledHelperTextColor: disabledProps.helperTextColor,
    disabledTextColor: disabledProps.textColor,
  };

  return {
    normal: normalState,
    focus: focusState,
    warning: warningState,
    error: errorState,
    disabled: disabledState,
  };
};
