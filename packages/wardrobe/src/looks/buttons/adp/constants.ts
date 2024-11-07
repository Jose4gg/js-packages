import { ButtonConstants } from '../../../types';
import { palette } from '../../palette';

const adpPalette = palette.adp;

const constants: ButtonConstants = {
  light: {
    background: '#fff',
    button: {
      bgColor: {
        default: adpPalette.primary[600],
        hover: adpPalette.primary[400],
        active: adpPalette.primary[500],
        disabled: adpPalette.isabelline[300],
      },
      fontColor: {
        default: '#fff',
        hover: '#fff',
        active: '#fff',
        disabled: adpPalette.isabelline[500],
      },
    },
    outlinedButton: {
      fontColor: {
        default: adpPalette.primary[700],
        hover: adpPalette.primary[500],
        active: adpPalette.primary[600],
        disabled: adpPalette.isabelline[300],
      },
    },
    themeButton: {
      bgColor: {
        hover: adpPalette.primary[50],
        active: adpPalette.primary[100],
      },
      fontColor: {
        default: adpPalette.primary[700],
        hover: adpPalette.primary[500],
        active: adpPalette.primary[600],
        disabled: adpPalette.isabelline[300],
      },
    },
  },
  dark: {
    background: '#000',
    button: {
      bgColor: {
        default: adpPalette.primary[400],
        hover: adpPalette.primary[200],
        active: adpPalette.primary[300],
        disabled: adpPalette.isabelline[700],
      },
      fontColor: {
        default: '#fff',
        hover: '#fff',
        active: '#fff',
        disabled: adpPalette.isabelline[400],
      },
    },
    outlinedButton: {
      fontColor: {
        default: adpPalette.primary[200],
        hover: adpPalette.primary[50],
        active: adpPalette.primary[200],
        disabled: adpPalette.isabelline[700],
      },
    },
    themeButton: {
      bgColor: {
        hover: adpPalette.primary[700],
        active: adpPalette.primary[700],
      },
      fontColor: {
        default: adpPalette.primary[200],
        hover: adpPalette.primary[50],
        active: adpPalette.primary[100],
        disabled: adpPalette.isabelline[700],
      },
    },
  },
};

export default constants;
