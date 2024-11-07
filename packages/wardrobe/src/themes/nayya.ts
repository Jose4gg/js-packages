import {
  breakpoints,
  buttons,
  dynamicColors,
  links,
  palette,
  pills,
  themeConfigs,
  typography,
} from '../looks';
import { Theme, ThemeName } from '../types';

const nayyaTheme: Theme = {
  id: ThemeName.NAYYA,
  breakpoints,
  typography: typography.nayya,
  palette: palette.nayya,
  pill: pills.nayya,
  link: links.nayya,
  buttons: buttons.nayya,
  dynamicColors: dynamicColors.nayya,
  config: themeConfigs.nayya,
};

export default nayyaTheme;
