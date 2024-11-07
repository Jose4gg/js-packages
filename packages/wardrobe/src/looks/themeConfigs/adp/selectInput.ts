import { palette } from 'src/looks/palette';
import adpTypography from 'src/looks/typography/adpTypography';
import { SelectInputConfig } from 'types';

const focusState = {
  focus: {
    border: `0.125rem solid ${palette.adp.primary[600]}`,
    iconColor: palette.adp.primary[600],
    listItemFocusBackgroundColor: palette.adp.primary[50],
  },
};

const warningState = {
  warning: {
    border: `0.125rem solid ${palette.adp.navajo[400]}`,
    iconColor: palette.adp.navajo[400],
    helperTextColor: palette.adp.navajo[700],
  },
};

const errorState = {
  error: {
    border: `0.125rem solid ${palette.adp.watermelon[500]}`,
    iconColor: palette.adp.watermelon[500],
    helperTextColor: palette.adp.watermelon[700],
  },
};

const disabledState = {
  disabled: {
    border: `0.125rem solid ${palette.adp.isabelline[500]}`,
    backgroundColor: palette.adp.isabelline[100],
    iconColor: palette.adp.isabelline[500],
    labelColor: palette.adp.isabelline[300],
    helperTextColor: palette.adp.isabelline[700],
    textColor: palette.adp.isabelline[500],
  },
};

const selectInputConfig: SelectInputConfig = {
  display: 'none',
  fontFamily: adpTypography.label1.fontFamily,
  height: '2.625rem',
  border: `0.125rem solid ${palette.adp.isabelline[500]}`,
  borderRadius: '0.375rem',
  iconColor: palette.adp.isabelline[500],
  labelColor: palette.adp.isabelline[700],
  labelFontSize: '0.875rem',
  helperTextColor: palette.adp.isabelline[700],
  textColor: palette.adp.isabelline[900],
  placeholderColor: palette.adp.isabelline[300],
  marginTop: '0',
  multiSelectMarginTop: '0',
  valueTopOffset: '0.25rem',
  inputMargin: '0',
  menuZIndex: 3000,
  maxMenuHeight: 200,
  state: {
    ...focusState,
    ...warningState,
    ...errorState,
    ...disabledState,
  },
};

export default selectInputConfig;
