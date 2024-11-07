import { Links } from '../../../types';
import { palette } from '../../palette';

const adpPalette = palette.adp;

export const links: Links = {
  default: adpPalette.primary[700],
  hover: adpPalette.primary[500],
  active: adpPalette.primary[600],
  disabled: adpPalette.isabelline[300],
};
