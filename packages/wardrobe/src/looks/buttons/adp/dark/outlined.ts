import { ButtonStyles, ButtonStates, ButtonProps } from '../../../../types';
import constants from '../constants';

const buttonDarkOutlinedStyles: ButtonStyles = {
  backgroundColor: 'transparent',
  border: `1px solid ${constants.dark.outlinedButton.fontColor.default}`,
  color: constants.dark.outlinedButton.fontColor.default,
};

const buttonDarkOutlinedStates: ButtonStates = {
  hover: {
    borderColor: constants.dark.outlinedButton.fontColor.hover,
    color: constants.dark.outlinedButton.fontColor.hover,
    backgroundColor: 'transparent',
  },
  active: {
    borderColor: constants.dark.outlinedButton.fontColor.active,
    color: constants.dark.outlinedButton.fontColor.active,
    backgroundColor: 'transparent',
  },
  loading: {
    borderColor: constants.dark.outlinedButton.fontColor.active,
    color: constants.dark.outlinedButton.fontColor.active,
    backgroundColor: 'transparent',
    cursor: 'wait',
  },
  disabled: {
    borderColor: constants.dark.outlinedButton.fontColor.disabled,
    color: constants.dark.outlinedButton.fontColor.disabled,
    backgroundColor: 'transparent',
    cursor: 'not-allowed',
  },
};

const buttonDarkOutlined: ButtonProps = {
  styles: buttonDarkOutlinedStyles,
  states: buttonDarkOutlinedStates,
};

export default buttonDarkOutlined;
