import { themeMap, ThemeName } from '@nayya-com/wardrobe';

export const getModalConfig = (theme: ThemeName) =>
  themeMap[theme].config.modal;
