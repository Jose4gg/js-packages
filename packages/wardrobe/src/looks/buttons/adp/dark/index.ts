import { ButtonStyles, ButtonStates, ButtonProps } from '../../../../types';
import constants from '../constants';

import buttonDarkMarketing from './marketing';
import buttonDarkOutlined from './outlined';
import buttonDarkText from './text';

const buttonDarkStyles: ButtonStyles = {
  backgroundColor: constants.dark.button.bgColor.default,
  color: constants.dark.button.fontColor.default,
};

const buttonDarkStates: ButtonStates = {
  hover: {
    backgroundColor: constants.dark.button.bgColor.hover,
  },
  active: {
    backgroundColor: constants.dark.button.bgColor.active,
  },
  disabled: {
    backgroundColor: constants.dark.button.bgColor.disabled,
    color: constants.dark.button.fontColor.disabled,
    cursor: 'not-allowed',
  },
  loading: {
    backgroundColor: constants.dark.button.bgColor.active,
    cursor: 'wait',
  },
};

const buttonDark: ButtonProps = {
  styles: buttonDarkStyles,
  states: buttonDarkStates,
};

export { buttonDark, buttonDarkText, buttonDarkOutlined, buttonDarkMarketing };
