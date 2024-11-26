import { Theme } from '@nayya-com/wardrobe';

import { Mode } from './Switch.types';

export const getThemeObject = (theme: Theme, mode: Mode) => {
  return theme.config.switch[mode];
};
