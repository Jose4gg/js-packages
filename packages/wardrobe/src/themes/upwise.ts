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

const upwiseTheme: Theme = {
  id: ThemeName.UPWISE,
  breakpoints,
  typography: typography.upwise,
  palette: palette.upwise,
  pill: pills.upwise,
  link: links.nayya,
  buttons: buttons.upwise,
  dynamicColors: dynamicColors.upwise,
  config: themeConfigs.upwise,
};

export default upwiseTheme;
