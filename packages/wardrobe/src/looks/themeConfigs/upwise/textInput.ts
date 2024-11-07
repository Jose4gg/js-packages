import { palette } from 'src/looks/palette';
import upwiseTypography from 'src/looks/typography/upwiseTypography';
import { TextInputConfig } from 'types';

const focusState = {
  focus: {
    borderColor: palette.upwise.primary[600],
    spinnerColor: palette.upwise.primary[600],
  },
};

const warningState = {
  warning: {
    borderColor: palette.upwise.navajo[500],
    helperTextColor: palette.upwise.navajo[600],
    spinnerColor: palette.upwise.navajo[500],
    actionButtonColor: palette.upwise.primary[500],
  },
};

const errorState = {
  error: {
    borderColor: palette.upwise.watermelon[500],
    helperTextColor: palette.upwise.watermelon[700],
    spinnerColor: palette.upwise.watermelon[500],
    actionButtonColor: palette.upwise.primary[500],
  },
};

const disabledState = {
  disabled: {
    borderColor: palette.upwise.isabelline[300],
    backgroundColor: palette.upwise.isabelline[50],
    labelColor: palette.upwise.isabelline[500],
    helperTextColor: palette.upwise.isabelline[500],
    actionButtonColor: palette.upwise.isabelline[500],
    textColor: palette.upwise.isabelline[500],
  },
};

const textInputConfig: TextInputConfig = {
  borderRadius: '0.5rem',
  borderColor: palette.upwise.isabelline[300],
  fontFamily: upwiseTypography.label1.fontFamily,
  labelColor: palette.upwise.isabelline[600],
  helperTextColor: palette.upwise.isabelline[600],
  textColor: palette.upwise.isabelline[800],
  placeholderColor: palette.upwise.isabelline[300],
  spinnerColor: palette.upwise.isabelline[300],
  actionButtonColor: palette.upwise.primary[600],
  state: {
    ...focusState,
    ...warningState,
    ...errorState,
    ...disabledState,
  },
};

export default textInputConfig;
