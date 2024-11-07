import { palette } from 'src/looks/palette';
import adpTypography from 'src/looks/typography/adpTypography';
import { RadioButtonConfig } from 'types';

const focusedState = {
  focused: {
    labelBorder: 'none',
    radioBorder: `0.125rem solid ${palette.adp.primary[600]}`,
  },
};

const checkedState = {
  checked: {
    background: 'transparent',
    labelBorder: 'none',
    radioBorder: `0.375rem solid ${palette.adp.primary[600]}`,
    textColor: palette.adp.isabelline[500],
  },
};

const disabledCheckedState = {
  disabledChecked: {
    background: '#fff',
    labelBackground: 'transparent',
    labelBorder: 'none',
    radioBorder: `0.375rem solid ${palette.adp.isabelline[300]}`,
    textColor: palette.adp.isabelline[500],
  },
};

const disabledUncheckedState = {
  disabledUnchecked: {
    background: palette.adp.isabelline[100],
    labelBackground: 'transparent',
    labelBorder: 'none',
    radioBorder: `0.125rem solid ${palette.adp.isabelline[300]}`,
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

const radioButtonConfig: RadioButtonConfig = {
  fontFamily: adpTypography.bodyFont,
  borderRadius: '0.375rem',
  innerCircleHeight: '0.74rem',
  innerCircleWidth: '0.74rem',
  hoverMargin: '0',
  labelBorder: 'none',
  labelPadding: '0',
  radioBorder: `0.125rem solid ${palette.adp.isabelline[500]}`,
  radioWidth: '1.5rem',
  radioHeight: '1.5rem',
  textColor: palette.adp.isabelline[900],
  labelGap: '0.375rem',
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
