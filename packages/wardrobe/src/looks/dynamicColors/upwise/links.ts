import { Links } from '../../../types';
import { palette } from '../../palette';

const nayyaPalette = palette.nayya;

export const links: Links = {
  default: nayyaPalette.primary[600],
  hover: nayyaPalette.primary[400],
  active: nayyaPalette.primary[500],
  disabled: nayyaPalette.isabelline[300],
};
