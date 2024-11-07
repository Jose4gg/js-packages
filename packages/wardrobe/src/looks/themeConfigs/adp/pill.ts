import { palette } from 'src/looks/palette';
import adpTypography from 'src/looks/typography/adpTypography';
import { PillConfig } from 'types';

const recommendedVariant = {
  backgroundColor: `linear-gradient(90deg, ${palette.adp.primary[300]} 0%, ${palette.adp.primary[400]} 100%)`,
  border: 'none',
  color: '#FFFFFF',
};

const recommendedBorderlessVariant = {
  backgroundColor: '#FFFFFF',
  border: 'none',
  color: palette.adp.primary[400],
};

const recommendedBorderedVariant = {
  backgroundColor: '#FFFFFF',
  border: `1px solid ${palette.adp.isabelline[900]}`,
  color: palette.adp.isabelline[900],
};

const planHighlightsVariant = {
  backgroundColor: '#FFFFFF',
  border: `1px solid ${palette.adp.primary[600]}`,
  color: palette.adp.primary[600],
};

const waivedVariant = {
  backgroundColor: palette.adp.isabelline[100],
  border: 'none',
  color: palette.adp.isabelline[700],
};

const pillConfig: PillConfig = {
  fontFamily: adpTypography.bodyFont,
  recommendedVariant,
  recommendedBorderlessVariant,
  recommendedBorderedVariant,
  planHighlightsVariant,
  waivedVariant,
};

export default pillConfig;
