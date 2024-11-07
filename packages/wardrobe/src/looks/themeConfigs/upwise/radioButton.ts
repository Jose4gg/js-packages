import { palette } from 'src/looks/palette';
import upwiseTypography from 'src/looks/typography/upwiseTypography';
import { RadioButtonConfig } from 'types';

const focusedState = {
  focused: {
    labelBorder: `0.0625rem solid ${palette.upwise.primary[600]}`,
    radioBorder: `0.125rem solid ${palette.upwise.primary[600]}`,
  },
};

const checkedState = {
  checked: {
    background: palette.upwise.primary[600],
    labelBorder: `0.125rem solid ${palette.upwise.primary[600]}`,
    radioBorder: `0.125rem solid ${palette.upwise.primary[600]}`,
    textColor: palette.upwise.isabelline[500],
  },
};

const disabledCheckedState = {
  disabledChecked: {
    background: palette.upwise.isabelline[300],
    labelBackground: palette.upwise.isabelline[50],
    labelBorder: `0.125rem solid ${palette.upwise.isabelline[300]}`,
    radioBorder: `0.125rem solid ${palette.upwise.isabelline[300]}`,
    textColor: palette.upwise.isabelline[500],
  },
};

const disabledUncheckedState = {
  disabledUnchecked: {
    background: palette.upwise.isabelline[50],
    labelBackground: palette.upwise.isabelline[50],
    labelBorder: `0.063rem solid ${palette.upwise.isabelline[300]}`,
    radioBorder: `0.125rem solid ${palette.upwise.isabelline[500]}`,
    textColor: palette.upwise.isabelline[500],
  },
};

const helperText = {
  helperText: {
    normal: palette.upwise.isabelline[800],
    error: palette.upwise.watermelon[700],
  },
};

const errorState = {
  error: {
    borderColor: palette.upwise.watermelon[500],
  },
};

const radioButtonConfig: RadioButtonConfig = {
  fontFamily: upwiseTypography.bodyFont,
  borderRadius: '0.25rem',
  innerCircleHeight: '0.875rem',
  innerCircleWidth: '0.875rem',
  hoverMargin: '-0.06rem',
  labelBorder: `0.063rem solid ${palette.upwise.isabelline[300]}`,
  labelPadding: '0.75rem 1.12rem',
  radioBorder: `0.125rem solid ${palette.upwise.isabelline[300]}`,
  radioWidth: '1.625rem',
  radioHeight: '1.625rem',
  textColor: palette.upwise.isabelline[800],
  labelGap: '0.75rem',
  state: {
    ...focusedState,
    ...checkedState,
    ...disabledCheckedState,
    ...disabledUncheckedState,
    ...helperText,
    ...errorState,
  },
};

export default radioButtonConfig;
