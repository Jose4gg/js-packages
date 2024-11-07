import { palette } from 'src/looks/palette';
import { SwitchConfig } from 'types';

const switchConfig: SwitchConfig = {
  light: {
    checked: {
      background: palette.upwise.primary[600],
    },
    unchecked: {
      background: palette.upwise.isabelline[300],
    },
  },
  dark: {
    checked: {
      background: palette.upwise.primary[400],
    },
    unchecked: {
      background: palette.upwise.isabelline[300],
    },
  },
};

export default switchConfig;
