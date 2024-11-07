import { ButtonStyles, ButtonStates, ButtonProps } from '../../../../types';
import constants from '../constants';

const buttonDarkTextStyles: ButtonStyles = {
  backgroundColor: 'transparent',
  color: constants.dark.themeButton.fontColor.default,
};

const buttonDarkTextStates: ButtonStates = {
  hover: {
    color: constants.dark.themeButton.fontColor.hover,
    backgroundColor: constants.dark.themeButton.bgColor.hover,
  },
  active: {
    color: constants.dark.themeButton.fontColor.active,
    backgroundColor: constants.dark.themeButton.bgColor.active,
  },
  loading: {
    color: constants.dark.themeButton.fontColor.active,
    backgroundColor: constants.dark.themeButton.bgColor.active,
    cursor: 'wait',
  },
  disabled: {
    color: constants.dark.themeButton.fontColor.disabled,
    backgroundColor: 'transparent',
    cursor: 'not-allowed',
  },
};

const buttonDarkText: ButtonProps = {
  styles: buttonDarkTextStyles,
  states: buttonDarkTextStates,
};

export default buttonDarkText;
