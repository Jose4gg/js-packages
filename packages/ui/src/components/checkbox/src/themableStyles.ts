import { Theme } from '@nayya-com/wardrobe';

export const getThemeObject = (theme: Theme) => {
  const styleProps = theme.config.checkbox;

  const focusedProps = styleProps.state.focused;
  const checkedProps = styleProps.state.checked;
  const uncheckedProps = styleProps.state.unchecked;
  const disabledCheckedProps = styleProps.state.disabledChecked;
  const disabledUncheckedProps = styleProps.state.disabledUnchecked;
  const helperTextProps = styleProps.state.helperText;
  const errorProps = styleProps.state.error;

  const common = {
    borderRadius: styleProps.borderRadius,
    checkMarkWidth: styleProps.checkMarkWidth,
    checkMarkHeight: styleProps.checkMarkHeight,
    fontFamily: styleProps.fontFamily,
    inputHeight: styleProps.inputHeight,
    inputWidth: styleProps.inputWidth,
    labelMargin: styleProps.labelMargin,
  };

  const checkedState = {
    checkedCheckboxBorder: checkedProps.checkboxBorder,
    checkedBackground: checkedProps.background,
    checkedCheckMarkColor: checkedProps.checkMarkColor,
    checkedLabelBorder: checkedProps.labelBorder,
    checkedTextColor: checkedProps.textColor,
  };

  const uncheckedState = {
    uncheckedCheckboxBorder: uncheckedProps.checkboxBorder,
    uncheckedBackground: uncheckedProps.background,
    uncheckedLabelBorder: uncheckedProps.labelBorder,
    uncheckedTextColor: uncheckedProps.textColor,
  };

  const disabledCheckedState = {
    disabledCheckedCheckboxBorder: disabledCheckedProps.checkboxBorder,
    disabledCheckedBackground: disabledCheckedProps.background,
    disabledCheckedCheckMarkColor: disabledCheckedProps.checkMarkColor,
    disabledCheckedLabelBorder: disabledCheckedProps.labelBorder,
    disabledCheckedTextColor: disabledCheckedProps.textColor,
  };

  const disabledUncheckedState = {
    disabledUncheckedCheckboxBorder: disabledUncheckedProps.checkboxBorder,
    disabledUncheckedBackground: disabledUncheckedProps.background,
    disabledUncheckedLabelBorder: disabledUncheckedProps.labelBorder,
    disabledUncheckedTextColor: disabledUncheckedProps.textColor,
  };

  const helperText = {
    helperTextNormal: helperTextProps.normal,
    helperTextError: helperTextProps.error,
  };

  return {
    common,
    focused: focusedProps,
    checked: checkedState,
    unchecked: uncheckedState,
    disabledChecked: disabledCheckedState,
    disabledUnchecked: disabledUncheckedState,
    helperText,
    error: errorProps,
  };
};
