import { Theme } from '@nayya-com/wardrobe';

const superWeight = '900';
const headerWeight = '700';

export const getThemeObject = (theme: Theme) => {
  return {
    headingFontFamily: theme.typography.headerFont,
    bodyFontFamily: theme.typography.bodyFont,
    superWeight,
    headerWeight,
    textColor: theme.typography.body1.color,
  };
};
