import { palette } from 'src/looks/palette';
import nayyaTypography from 'src/looks/typography/nayyaTypography';
import { CheckboxConfig } from 'types';

const focusedState = {
  focused: {
    labelBorder: `0.0625rem solid ${palette.nayya.primary[600]}`,
    checkboxBorder: `0.125rem solid ${palette.nayya.primary[600]}`,
  },
};

const checkedState = {
  checked: {
    checkboxBorder: `0.125rem solid ${palette.nayya.primary[600]}`,
    background: palette.nayya.primary[600],
    checkMarkColor: '#FFFFFF',
    labelBorder: `0.125rem solid ${palette.nayya.primary[600]}`,
    textColor: palette.nayya.isabelline[900],
  },
};

const uncheckedState = {
  unchecked: {
    checkboxBorder: `0.125rem solid ${palette.nayya.isabelline[300]}`,
    background: 'transparent',
    labelBorder: `0.063rem solid ${palette.nayya.isabelline[400]}`,
    textColor: palette.nayya.isabelline[900],
  },
};

const disabledCheckedState = {
  disabledChecked: {
    checkboxBorder: `0.125rem solid ${palette.nayya.isabelline[300]}`,
    background: palette.nayya.isabelline[300],
    checkMarkColor: '#FFFFFF',
    labelBorder: `0.125rem solid ${palette.nayya.isabelline[300]}`,
    textColor: palette.nayya.isabelline[500],
  },
};

const disabledUncheckedState = {
  disabledUnchecked: {
    checkboxBorder: `0.125rem solid ${palette.nayya.isabelline[300]}`,
    background: palette.nayya.isabelline[100],
    labelBorder: `0.063rem solid ${palette.nayya.isabelline[300]}`,
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

const checkboxConfig: CheckboxConfig = {
  borderRadius: '0.25rem',
  checkMarkHeight: '0.875rem',
  checkMarkWidth: '0.875rem',
  fontFamily: nayyaTypography.label1.fontFamily,
  inputHeight: '1.625rem',
  inputWidth: '1.625rem',
  labelMargin: '0 0 0 0.75rem',
  state: {
    ...focusedState,
    ...checkedState,
    ...uncheckedState,
    ...disabledCheckedState,
    ...disabledUncheckedState,
    ...helperText,
    ...errorState,
  },
};

export default checkboxConfig;
