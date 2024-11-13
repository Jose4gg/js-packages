import { Theme } from '@nayya-com/wardrobe';

export const getThemeObject = (theme: Theme) => {
  const styleProps = theme.config.textInput;

  const focusProps = styleProps.state.focus;
  const warningProps = styleProps.state.warning;
  const errorProps = styleProps.state.error;
  const disabledProps = styleProps.state.disabled;

  const normalState = {
    borderRadius: styleProps.borderRadius,
    borderColor: styleProps.borderColor,
    fontFamily: styleProps.fontFamily,
    labelColor: styleProps.labelColor,
    helperTextColor: styleProps.helperTextColor,
    textColor: styleProps.textColor,
    placeholderColor: styleProps.placeholderColor,
    spinnerColor: styleProps.spinnerColor,
    actionButtonColor: styleProps.actionButtonColor,
  };

  const focusState = {
    focusBorderColor: focusProps.borderColor,
    focusSpinnerColor: focusProps.spinnerColor,
  };

  const warningState = {
    warningBorderColor: warningProps.borderColor,
    warningHelperTextColor: warningProps.helperTextColor,
    warningSpinnerColor: warningProps.spinnerColor,
    warningActionButtonColor: warningProps.actionButtonColor,
  };

  const errorState = {
    errorBorderColor: errorProps.borderColor,
    errorHelperTextColor: errorProps.helperTextColor,
    errorSpinnerColor: errorProps.spinnerColor,
    errorActionButtonColor: errorProps.actionButtonColor,
  };

  const disabledState = {
    disabledBorderColor: disabledProps.borderColor,
    disabledBackgroundColor: disabledProps.backgroundColor,
    disabledLabelColor: disabledProps.labelColor,
    disabledHelperTextColor: disabledProps.helperTextColor,
    disabledActionButtonColor: disabledProps.actionButtonColor,
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
