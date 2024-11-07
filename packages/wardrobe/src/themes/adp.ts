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

const adpTheme: Theme = {
  id: ThemeName.ADP,
  breakpoints,
  typography: typography.adp,
  palette: palette.adp,
  pill: pills.adp,
  link: links.adp,
  buttons: buttons.adp,
  dynamicColors: dynamicColors.adp,
  config: themeConfigs.adp,
};

export default adpTheme;
