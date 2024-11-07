import { palette } from 'src/looks/palette';
import nayyaTypography from 'src/looks/typography/nayyaTypography';
import { TextInputConfig } from 'types';

const focusState = {
  focus: {
    borderColor: palette.nayya.primary[500],
    spinnerColor: palette.nayya.primary[500],
  },
};

const warningState = {
  warning: {
    borderColor: palette.nayya.navajo[600],
    helperTextColor: palette.nayya.navajo[700],
    spinnerColor: palette.nayya.navajo[600],
    actionButtonColor: palette.nayya.primary[600],
  },
};

const errorState = {
  error: {
    borderColor: palette.nayya.watermelon[600],
    helperTextColor: palette.nayya.watermelon[700],
    spinnerColor: palette.nayya.watermelon[600],
    actionButtonColor: palette.nayya.primary[600],
  },
};

const disabledState = {
  disabled: {
    borderColor: palette.nayya.isabelline[200],
    backgroundColor: palette.nayya.isabelline[50],
    labelColor: palette.nayya.isabelline[300],
    helperTextColor: palette.nayya.isabelline[300],
    actionButtonColor: palette.nayya.isabelline[300],
    textColor: palette.nayya.isabelline[500],
  },
};

const textInputConfig: TextInputConfig = {
  borderRadius: '0.25rem',
  borderColor: palette.nayya.isabelline[200],
  fontFamily: nayyaTypography.label1.fontFamily,
  labelColor: palette.nayya.isabelline[600],
  helperTextColor: palette.nayya.isabelline[600],
  textColor: palette.nayya.isabelline[900],
  placeholderColor: palette.nayya.isabelline[300],
  spinnerColor: palette.nayya.isabelline[200],
  actionButtonColor: palette.nayya.primary[600],
  state: {
    ...focusState,
    ...warningState,
    ...errorState,
    ...disabledState,
  },
};

export default textInputConfig;
