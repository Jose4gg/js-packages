import { ButtonStates } from '../../../../types';
import constants from '../constants';

import buttonLightMarketing from './marketing';
import buttonLightOutlined from './outlined';
import buttonLightText from './text';

const buttonLightStyles = {
  backgroundColor: constants.light.button.bgColor.default,
  color: constants.light.button.fontColor.default,
};

const buttonLightStates: ButtonStates = {
  hover: {
    backgroundColor: constants.light.button.bgColor.hover,
  },
  active: {
    backgroundColor: constants.light.button.bgColor.active,
  },
  disabled: {
    backgroundColor: constants.light.button.bgColor.disabled,
    color: constants.light.button.fontColor.disabled,
    cursor: 'not-allowed',
  },
  loading: {
    backgroundColor: constants.light.button.bgColor.active,
    cursor: 'wait',
  },
};

const buttonLight = {
  styles: buttonLightStyles,
  states: buttonLightStates,
};

export {
  buttonLight,
  buttonLightText,
  buttonLightMarketing,
  buttonLightOutlined,
};
