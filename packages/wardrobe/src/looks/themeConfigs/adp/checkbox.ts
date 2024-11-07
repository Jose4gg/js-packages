import { palette } from 'src/looks/palette';
import adpTypography from 'src/looks/typography/adpTypography';
import { CheckboxConfig } from 'types';

const focusedState = {
  focused: {
    labelBorder: `0.125rem solid ${palette.adp.primary[600]}`,
    checkboxBorder: `0.125rem solid ${palette.adp.primary[600]}`,
  },
};

const checkedState = {
  checked: {
    checkboxBorder: `0.125rem solid ${palette.adp.primary[600]}`,
    background: palette.adp.primary[600],
    checkMarkColor: '#FFFFFF',
    labelBorder: 'none',
    textColor: palette.adp.isabelline[900],
  },
};

const uncheckedState = {
  unchecked: {
    checkboxBorder: `0.125rem solid ${palette.adp.isabelline[500]}`,
    background: 'transparent',
    labelBorder: 'none',
    textColor: palette.adp.isabelline[900],
  },
};

const disabledCheckedState = {
  disabledChecked: {
    checkboxBorder: `0.125rem solid ${palette.adp.isabelline[300]}`,
    background: palette.adp.isabelline[300],
    checkMarkColor: '#FFFFFF',
    labelBorder: 'none',
    textColor: palette.adp.isabelline[500],
  },
};

const disabledUncheckedState = {
  disabledUnchecked: {
    checkboxBorder: `0.125rem solid ${palette.adp.isabelline[300]}`,
    background: palette.adp.isabelline[100],
    labelBorder: 'none',
    textColor: palette.adp.isabelline[500],
  },
};

const helperText = {
  helperText: {
    normal: palette.adp.isabelline[900],
    error: palette.adp.watermelon[700],
  },
};

const errorState = {
  error: {
    borderColor: palette.adp.watermelon[500],
  },
};

const checkboxConfig: CheckboxConfig = {
  borderRadius: '0.375rem',
  checkMarkHeight: '0.75rem',
  checkMarkWidth: '0.75rem',
  fontFamily: adpTypography.label1.fontFamily,
  inputHeight: '1.5rem',
  inputWidth: '1.5rem',
  labelMargin: '0 0 0 0.375rem',
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
