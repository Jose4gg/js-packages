import { ButtonBase, ButtonStates, ButtonStyles } from '../../../types';

import constants from './constants';

const buttonBaseStyles: ButtonStyles = {
  backgroundColor: 'transparent',
  fontSize: '1rem',
  lineHeight: '1.125rem',
  fontWeight: 'bold',
  color: constants.light.button.fontColor.default,
  padding: '0rem 2.25rem',
  height: '2.625rem',
  borderRadius: '0.25rem',
  border: 'none',
  // Something is not right with typescript here.
  boxSizing: 'border-box',
};

const buttonBaseStates: ButtonStates = {
  hover: {
    cursor: 'pointer',
  },
};

const buttonBase: ButtonBase = {
  styles: buttonBaseStyles,
  states: buttonBaseStates,
  variantStyles: {
    mini: {
      fontSize: '0.875rem',
      lineHeight: '1rem',
      padding: '0rem 1.285rem',
      height: '2.5rem',
    },
    large: {
      lineHeight: '1rem',
      padding: '0rem 3.25rem',
    },
  },
};

export default buttonBase;
