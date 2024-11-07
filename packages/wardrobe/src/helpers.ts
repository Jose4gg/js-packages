import { adpTheme, nayyaTheme, upwiseTheme } from 'themes';
import { Theme, ThemeName } from 'types';

const themeMap: Record<ThemeName, Theme> = {
  adp: adpTheme,
  nayya: nayyaTheme,
  upwise: upwiseTheme,
} as const;

const getRootWebUiTheme = (): Theme => {
  const legacyRootClass = document
    .querySelector('#root')
    ?.getAttribute('class');

  const rootWebUIThemeClass = document
    .querySelector('.themeRoot')
    ?.getAttribute('class');
  const rootWebUiThemeName =
    rootWebUIThemeClass?.split(' ')[1] || ThemeName.NAYYA;

  if (legacyRootClass === ThemeName.ADP) {
    return themeMap[legacyRootClass];
  }
  const theme = themeMap[rootWebUiThemeName?.toLowerCase() as ThemeName] as
    | Theme
    | undefined;

  return theme || nayyaTheme;
};

const getThemeObjectByThemeName = (theme: ThemeName): Theme => {
  return themeMap[theme.toLowerCase() as ThemeName] || nayyaTheme;
};

export { getRootWebUiTheme, themeMap, getThemeObjectByThemeName };
