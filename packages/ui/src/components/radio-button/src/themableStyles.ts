import { Theme } from '@nayya-com/wardrobe';

export const getThemeObject = (theme: Theme) => {
  const styleProps = theme.config.radioButton;

  const common = {
    fontFamily: styleProps.fontFamily,
    borderRadius: styleProps.borderRadius,
    innerCircleHeight: styleProps.innerCircleHeight,
    innerCircleWidth: styleProps.innerCircleWidth,
    hoverMargin: styleProps.hoverMargin,
    labelBorder: styleProps.labelBorder,
    labelPadding: styleProps.labelPadding,
    radioBorder: styleProps.radioBorder,
    radioHeight: styleProps.radioHeight,
    radioWidth: styleProps.radioWidth,
    textColor: styleProps.textColor,
    labelGap: styleProps.labelGap,
  };

  return {
    common,
    focused: styleProps.state.focused,
    checked: styleProps.state.checked,
    error: styleProps.state.error,
    disabledChecked: styleProps.state.disabledChecked,
    disabledUnchecked: styleProps.state.disabledUnchecked,
    helperText: styleProps.state.helperText,
  };
};
