import { Theme } from '@nayya-com/wardrobe';

export const getThemeObject = (theme: Theme) => {
  const styleProps = theme.config.pill;

  return {
    fontFamily: styleProps.fontFamily,
    recommended: styleProps.recommendedVariant,
    recommendedBorderless: styleProps.recommendedBorderlessVariant,
    recommendedBordered: styleProps.recommendedBorderedVariant,
    planHighlights: styleProps.planHighlightsVariant,
    waived: styleProps.waivedVariant,
  };
};
