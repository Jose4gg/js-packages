import { Buttons } from '../../../types';

import buttonBase from './base';
import {
  buttonDark,
  buttonDarkMarketing,
  buttonDarkOutlined,
  buttonDarkText,
} from './dark';
import {
  buttonLight,
  buttonLightMarketing,
  buttonLightOutlined,
  buttonLightText,
} from './light';

const adpButtons: Buttons = {
  base: buttonBase,
  light: {
    ...buttonLight,
    variants: {
      outlined: buttonLightOutlined,
      text: buttonLightText,
      marketing: buttonLightMarketing,
    },
  },
  dark: {
    ...buttonDark,
    variants: {
      outlined: buttonDarkOutlined,
      text: buttonDarkText,
      marketing: buttonDarkMarketing,
    },
  },
};

export default adpButtons;
