import { palette } from 'src/looks/palette';
import { SwitchConfig } from 'types';

const switchConfig: SwitchConfig = {
  light: {
    checked: {
      background: palette.adp.primary[700],
    },
    unchecked: {
      background: palette.adp.isabelline[200],
    },
  },
  dark: {
    checked: {
      background: palette.adp.primary[300],
    },
    unchecked: {
      background: palette.adp.isabelline[200],
    },
  },
};

export default switchConfig;
