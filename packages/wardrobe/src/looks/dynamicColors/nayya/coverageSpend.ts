import {
  CoverageSpendColors,
  HighlightsColors,
  SpendCardColors,
} from '../../../types';
import { palette } from '../../palette';

const nayyaPalette = palette.nayya;

const spendCard: SpendCardColors = {
  spendAmount: nayyaPalette.sinbad[600],
  spendBar: nayyaPalette.sinbad[500],
  border: nayyaPalette.isabelline[100],
};

const highlights: HighlightsColors = {
  border: nayyaPalette.isabelline[100],
};

export const coverageSpend: CoverageSpendColors = {
  spendCard,
  highlights,
};
