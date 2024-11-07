import { palette } from 'src/looks/palette';
import nayyaTypography from 'src/looks/typography/nayyaTypography';
import { RadioButtonConfig } from 'types';

const focusedState = {
  focused: {
    labelBorder: `0.0625rem solid ${palette.nayya.primary[600]}`,
    radioBorder: `0.125rem solid ${palette.nayya.primary[600]}`,
  },
};

const checkedState = {
  checked: {
    background: palette.nayya.primary[600],
    labelBorder: `0.125rem solid ${palette.nayya.primary[600]}`,
    radioBorder: `0.125rem solid ${palette.nayya.primary[600]}`,
    textColor: palette.nayya.isabelline[500],
  },
};

const disabledCheckedState = {
  disabledChecked: {
    background: palette.nayya.isabelline[300],
    labelBackground: palette.nayya.isabelline[100],
    labelBorder: `0.125rem solid ${palette.nayya.isabelline[300]}`,
    radioBorder: `0.125rem solid ${palette.nayya.isabelline[300]}`,
    textColor: palette.nayya.isabelline[500],
  },
};

const disabledUncheckedState = {
  disabledUnchecked: {
    background: palette.nayya.isabelline[100],
    labelBackground: palette.nayya.isabelline[100],
    labelBorder: `0.063rem solid ${palette.nayya.isabelline[300]}`,
    radioBorder: `0.125rem solid ${palette.nayya.isabelline[300]}`,
    textColor: palette.nayya.isabelline[500],
  },
};

const helperText = {
  helperText: {
    normal: palette.nayya.isabelline[900],
    error: palette.nayya.watermelon[700],
  },
};
const errorState = {
  error: {
    borderColor: palette.nayya.watermelon[600],
  },
};

const radioButtonConfig: RadioButtonConfig = {
  fontFamily: nayyaTypography.bodyFont,
  borderRadius: '0.25rem',
  innerCircleHeight: '0.875rem',
  innerCircleWidth: '0.875rem',
  hoverMargin: '-0.06rem',
  labelBorder: `0.063rem solid ${palette.nayya.isabelline[300]}`,
  labelPadding: '0.75rem 1.12rem',
  radioBorder: `0.125rem solid ${palette.nayya.isabelline[300]}`,
  radioWidth: '1.625rem',
  radioHeight: '1.625rem',
  textColor: palette.adp.isabelline[900],
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
