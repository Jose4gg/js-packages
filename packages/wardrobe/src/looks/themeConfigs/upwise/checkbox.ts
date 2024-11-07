import { palette } from 'src/looks/palette';
import upwiseTypography from 'src/looks/typography/upwiseTypography';
import { CheckboxConfig } from 'types';

const focusedState = {
  focused: {
    labelBorder: `0.0625rem solid ${palette.upwise.primary[600]}`,
    checkboxBorder: `0.125rem solid ${palette.upwise.primary[600]}`,
  },
};

const checkedState = {
  checked: {
    checkboxBorder: `0.125rem solid ${palette.upwise.primary[600]}`,
    background: palette.upwise.primary[600],
    checkMarkColor: '#FFFFFF',
    labelBorder: `0.125rem solid ${palette.upwise.primary[600]}`,
    textColor: palette.upwise.isabelline[900],
  },
};

const uncheckedState = {
  unchecked: {
    checkboxBorder: `0.125rem solid ${palette.upwise.isabelline[300]}`,
    background: 'transparent',
    labelBorder: `0.063rem solid ${palette.upwise.isabelline[300]}`,
    textColor: palette.upwise.isabelline[900],
  },
};

const disabledCheckedState = {
  disabledChecked: {
    checkboxBorder: `0.125rem solid ${palette.upwise.isabelline[100]}`,
    background: palette.upwise.isabelline[100],
    checkMarkColor: palette.upwise.isabelline[500],
    labelBorder: `0.125rem solid ${palette.upwise.isabelline[300]}`,
    textColor: palette.upwise.isabelline[500],
  },
};

const disabledUncheckedState = {
  disabledUnchecked: {
    checkboxBorder: `0.125rem solid ${palette.upwise.isabelline[300]}`,
    background: palette.upwise.isabelline[100],
    labelBorder: `0.063rem solid ${palette.upwise.isabelline[300]}`,
    textColor: palette.upwise.isabelline[500],
  },
};

const helperText = {
  helperText: {
    normal: palette.upwise.isabelline[900],
    error: palette.upwise.watermelon[700],
  },
};

const errorState = {
  error: {
    borderColor: palette.upwise.watermelon[500],
  },
};

const checkboxConfig: CheckboxConfig = {
  borderRadius: '0.25rem',
  checkMarkHeight: '0.875rem',
  checkMarkWidth: '0.875rem',
  fontFamily: upwiseTypography.label1.fontFamily,
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
