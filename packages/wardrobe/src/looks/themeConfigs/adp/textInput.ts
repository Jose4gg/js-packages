import { palette } from 'src/looks/palette';
import adpTypography from 'src/looks/typography/adpTypography';
import { TextInputConfig } from 'types';

const focusState = {
  focus: {
    borderColor: palette.adp.primary[600],
    spinnerColor: palette.adp.primary[600],
  },
};

const warningState = {
  warning: {
    borderColor: palette.adp.navajo[400],
    helperTextColor: palette.adp.navajo[700],
    spinnerColor: palette.adp.navajo[400],
    actionButtonColor: palette.adp.primary[700],
  },
};

const errorState = {
  error: {
    borderColor: palette.adp.watermelon[500],
    helperTextColor: palette.adp.watermelon[700],
    spinnerColor: palette.adp.watermelon[500],
    actionButtonColor: palette.adp.primary[700],
  },
};

const disabledState = {
  disabled: {
    borderColor: palette.adp.isabelline[500],
    backgroundColor: palette.adp.isabelline[100],
    labelColor: palette.adp.isabelline[700],
    helperTextColor: palette.adp.isabelline[700],
    actionButtonColor: palette.adp.isabelline[500],
    textColor: palette.adp.isabelline[500],
  },
};

const textInputConfig: TextInputConfig = {
  borderRadius: '0.375rem',
  borderColor: palette.adp.isabelline[500],
  fontFamily: adpTypography.label1.fontFamily,
  labelColor: palette.adp.isabelline[700],
  helperTextColor: palette.adp.isabelline[700],
  textColor: palette.adp.isabelline[900],
  placeholderColor: palette.adp.isabelline[300],
  spinnerColor: palette.adp.isabelline[500],
  actionButtonColor: palette.adp.primary[700],
  state: {
    ...focusState,
    ...warningState,
    ...errorState,
    ...disabledState,
  },
};

export default textInputConfig;
