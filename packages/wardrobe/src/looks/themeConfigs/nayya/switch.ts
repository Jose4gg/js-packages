import { palette } from 'src/looks/palette';
import { SwitchConfig } from 'types';

const switchConfig: SwitchConfig = {
  light: {
    checked: {
      background: palette.nayya.primary[600],
    },
    unchecked: {
      background: palette.nayya.isabelline[200],
    },
  },
  dark: {
    checked: {
      background: palette.nayya.primary[200],
    },
    unchecked: {
      background: palette.nayya.isabelline[200],
    },
  },
};

export default switchConfig;
