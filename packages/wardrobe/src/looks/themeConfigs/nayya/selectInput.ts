import { palette } from 'src/looks/palette';
import nayyaTypography from 'src/looks/typography/nayyaTypography';
import { SelectInputConfig } from 'types';

const focusState = {
  focus: {
    border: `0.125rem solid ${palette.nayya.primary[500]}`,
    iconColor: palette.nayya.primary[500],
    listItemFocusBackgroundColor: palette.nayya.primary[50],
  },
};

const warningState = {
  warning: {
    border: `0.125rem solid ${palette.nayya.navajo[600]}`,
    iconColor: palette.nayya.navajo[600],
    helperTextColor: palette.nayya.navajo[700],
  },
};

const errorState = {
  error: {
    border: `0.125rem solid ${palette.nayya.watermelon[600]}`,
    iconColor: palette.nayya.watermelon[600],
    helperTextColor: palette.nayya.watermelon[700],
  },
};

const disabledState = {
  disabled: {
    border: `0.125rem solid ${palette.nayya.isabelline[200]}`,
    backgroundColor: palette.nayya.isabelline[50],
    iconColor: palette.nayya.isabelline[200],
    labelColor: palette.nayya.isabelline[300],
    helperTextColor: palette.nayya.isabelline[300],
    textColor: palette.nayya.isabelline[300],
  },
};

const selectInputConfig: SelectInputConfig = {
  display: 'block',
  fontFamily: nayyaTypography.label1.fontFamily,
  height: '3.625rem',
  border: `0.125rem solid ${palette.nayya.isabelline[200]}`,
  borderRadius: '0.25rem',
  iconColor: palette.nayya.isabelline[200],
  labelColor: palette.nayya.isabelline[600],
  labelFontSize: '1rem',
  helperTextColor: palette.nayya.isabelline[600],
  textColor: palette.nayya.isabelline[900],
  placeholderColor: palette.nayya.isabelline[600],
  marginTop: '0.4rem',
  multiSelectMarginTop: '0.625rem',
  valueTopOffset: '0.625rem',
  inputMargin: '0.75rem 0 0 0',
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
