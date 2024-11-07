import { ThemeConfig } from 'types';

import adpThemeConfig from './adp';
import nayyaThemeConfig from './nayya';
import upwiseThemeConfig from './upwise';

const themeConfigs: {
  nayya: ThemeConfig;
  adp: ThemeConfig;
  upwise: ThemeConfig;
} = {
  nayya: nayyaThemeConfig,
  adp: adpThemeConfig,
  upwise: upwiseThemeConfig,
};

export { themeConfigs };
