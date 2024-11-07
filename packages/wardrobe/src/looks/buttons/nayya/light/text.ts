import { ButtonStyles, ButtonStates, ButtonProps } from '../../../../types';
import constants from '../constants';

const buttonLightTextStyles: ButtonStyles = {
  backgroundColor: 'transparent',
  color: constants.light.themeButton.fontColor.default,
};

const buttonLightTextStates: ButtonStates = {
  hover: {
    color: constants.light.themeButton.fontColor.hover,
    backgroundColor: constants.light.themeButton.bgColor.hover,
  },
  active: {
    color: constants.light.themeButton.fontColor.active,
    backgroundColor: constants.light.themeButton.bgColor.active,
  },
  loading: {
    color: constants.light.themeButton.fontColor.active,
    backgroundColor: constants.light.themeButton.bgColor.active,
    cursor: 'wait',
  },
  disabled: {
    color: constants.light.themeButton.fontColor.disabled,
    backgroundColor: 'transparent',
    cursor: 'not-allowed',
  },
};

const buttonLightText: ButtonProps = {
  styles: buttonLightTextStyles,
  states: buttonLightTextStates,
};

export default buttonLightText;
