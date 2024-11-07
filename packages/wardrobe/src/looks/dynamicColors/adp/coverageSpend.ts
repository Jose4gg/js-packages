import {
  CoverageSpendColors,
  HighlightsColors,
  SpendCardColors,
} from '../../../types';
import { palette } from '../../palette';

const adpPalette = palette.adp;

const spendCard: SpendCardColors = {
  spendAmount: adpPalette.sinbad[600],
  spendBar: adpPalette.sinbad[500],
  border: adpPalette.isabelline[300],
};

const highlights: HighlightsColors = {
  border: adpPalette.isabelline[300],
};

export const coverageSpend: CoverageSpendColors = {
  spendCard,
  highlights,
};
