import { palette } from 'src/looks/palette';
import upwiseTypography from 'src/looks/typography/upwiseTypography';
import { PillConfig } from 'types';

const recommendedVariant = {
  backgroundColor: `linear-gradient(90deg, ${palette.upwise.primary[300]} 0%, ${palette.upwise.primary[400]} 100%)`,
  border: 'none',
  color: '#FFFFFF',
};

const recommendedBorderlessVariant = {
  backgroundColor: '#FFFFFF',
  border: 'none',
  color: palette.upwise.primary[400],
};

const recommendedBorderedVariant = {
  backgroundColor: '#FFFFFF',
  border: `1px solid ${palette.upwise.isabelline[900]}`,
  color: palette.upwise.isabelline[900],
};

const planHighlightsVariant = {
  backgroundColor: '#FFFFFF',
  border: `1px solid ${palette.upwise.primary[600]}`,
  color: palette.upwise.primary[600],
};

const waivedVariant = {
  backgroundColor: palette.upwise.isabelline[100],
  border: 'none',
  color: palette.upwise.isabelline[600],
};

const pillConfig: PillConfig = {
  fontFamily: upwiseTypography.bodyFont,
  recommendedVariant,
  recommendedBorderlessVariant,
  recommendedBorderedVariant,
  planHighlightsVariant,
  waivedVariant,
};

export default pillConfig;
