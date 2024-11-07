import { ButtonStyles, ButtonStates, ButtonProps } from '../../../../types';
import constants from '../constants';

const buttonLightOutlinedStyles: ButtonStyles = {
  backgroundColor: 'transparent',
  border: `1px solid ${constants.light.outlinedButton.fontColor.default}`,
  color: constants.light.outlinedButton.fontColor.default,
};

const buttonLightOutlinedStates: ButtonStates = {
  hover: {
    borderColor: constants.light.outlinedButton.fontColor.hover,
    color: constants.light.outlinedButton.fontColor.hover,
    backgroundColor: 'transparent',
  },
  active: {
    borderColor: constants.light.outlinedButton.fontColor.active,
    color: constants.light.outlinedButton.fontColor.active,
    backgroundColor: 'transparent',
  },
  loading: {
    borderColor: constants.light.outlinedButton.fontColor.active,
    color: constants.light.outlinedButton.fontColor.active,
    backgroundColor: 'transparent',
    cursor: 'wait',
  },
  disabled: {
    borderColor: constants.light.outlinedButton.fontColor.disabled,
    color: constants.light.outlinedButton.fontColor.disabled,
    backgroundColor: 'transparent',
    cursor: 'not-allowed',
  },
};

const buttonLightOutlined: ButtonProps = {
  styles: buttonLightOutlinedStyles,
  states: buttonLightOutlinedStates,
};

export default buttonLightOutlined;
