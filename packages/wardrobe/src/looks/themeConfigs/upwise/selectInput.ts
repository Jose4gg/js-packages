import { palette } from 'src/looks/palette';
import upwiseTypography from 'src/looks/typography/upwiseTypography';
import { SelectInputConfig } from 'types';

const focusState = {
  focus: {
    border: `0.125rem solid ${palette.upwise.primary[600]}`,
    iconColor: palette.upwise.primary[600],
    listItemFocusBackgroundColor: palette.upwise.primary[50],
  },
};

const warningState = {
  warning: {
    border: `0.125rem solid ${palette.upwise.navajo[500]}`,
    iconColor: palette.upwise.navajo[500],
    helperTextColor: palette.upwise.navajo[600],
  },
};

const errorState = {
  error: {
    border: `0.125rem solid ${palette.upwise.watermelon[500]}`,
    iconColor: palette.upwise.watermelon[500],
    helperTextColor: palette.upwise.watermelon[700],
  },
};

const disabledState = {
  disabled: {
    border: `0.063rem solid ${palette.upwise.isabelline[300]}`,
    backgroundColor: palette.upwise.isabelline[50],
    iconColor: palette.upwise.isabelline[300],
    labelColor: palette.upwise.isabelline[500],
    helperTextColor: palette.upwise.isabelline[500],
    textColor: palette.upwise.isabelline[500],
  },
};

const selectInputConfig: SelectInputConfig = {
  display: 'block',
  fontFamily: upwiseTypography.label1.fontFamily,
  height: '3.625rem',
  border: `0.063rem solid ${palette.upwise.isabelline[300]}`,
  borderRadius: '0.375rem',
  iconColor: palette.upwise.isabelline[500],
  labelColor: palette.upwise.isabelline[600],
  labelFontSize: '1rem',
  helperTextColor: palette.upwise.isabelline[600],
  textColor: palette.upwise.isabelline[800],
  placeholderColor: palette.upwise.isabelline[600],
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
