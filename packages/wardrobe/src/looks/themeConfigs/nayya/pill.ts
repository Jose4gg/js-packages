import { palette } from 'src/looks/palette';
import nayyaTypography from 'src/looks/typography/nayyaTypography';
import { PillConfig } from 'types';

const recommendedVariant = {
  backgroundColor: `linear-gradient(90deg, ${palette.nayya.primary[300]} 0%, ${palette.nayya.primary[400]} 100%)`,
  border: 'none',
  color: '#FFFFFF',
};

const recommendedBorderlessVariant = {
  backgroundColor: '#FFFFFF',
  border: 'none',
  color: palette.nayya.primary[400],
};

const recommendedBorderedVariant = {
  backgroundColor: '#FFFFFF',
  border: `1px solid ${palette.nayya.isabelline[900]}`,
  color: palette.nayya.isabelline[900],
};

const planHighlightsVariant = {
  backgroundColor: '#FFFFFF',
  border: `1px solid ${palette.nayya.primary[600]}`,
  color: palette.nayya.primary[600],
};

const waivedVariant = {
  backgroundColor: palette.nayya.isabelline[100],
  border: 'none',
  color: palette.nayya.isabelline[600],
};

const pillConfig: PillConfig = {
  fontFamily: nayyaTypography.bodyFont,
  recommendedVariant,
  recommendedBorderlessVariant,
  recommendedBorderedVariant,
  planHighlightsVariant,
  waivedVariant,
};

export default pillConfig;
