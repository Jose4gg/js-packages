import { ButtonConstants } from '../../../types';
import { palette } from '../../palette';

const upwisePalette = palette.upwise;

const constants: ButtonConstants = {
  light: {
    background: '#fff',
    button: {
      bgColor: {
        default: upwisePalette.primary[600],
        hover: upwisePalette.primary[900],
        active: upwisePalette.primary[900],
        disabled: upwisePalette.isabelline[300],
      },
      fontColor: {
        default: '#fff',
        hover: '#fff',
        active: '#fff',
        disabled: '#fff',
      },
    },
    outlinedButton: {
      fontColor: {
        default: upwisePalette.primary[600],
        hover: upwisePalette.primary[900],
        active: upwisePalette.primary[900],
        disabled: upwisePalette.isabelline[300],
      },
    },
    themeButton: {
      bgColor: {
        hover: upwisePalette.primary[50],
        active: upwisePalette.primary[100],
      },
      fontColor: {
        default: upwisePalette.primary[600],
        hover: upwisePalette.primary[400],
        active: upwisePalette.primary[500],
        disabled: upwisePalette.isabelline[300],
      },
    },
  },
  dark: {
    background: upwisePalette.primary[800],
    button: {
      bgColor: {
        default: upwisePalette.primary[400],
        hover: upwisePalette.primary[200],
        active: upwisePalette.primary[300],
        disabled: upwisePalette.isabelline[700],
      },
      fontColor: {
        default: '#fff',
        hover: '#fff',
        active: '#fff',
        disabled: upwisePalette.isabelline[400],
      },
    },
    outlinedButton: {
      fontColor: {
        default: upwisePalette.primary[200],
        hover: upwisePalette.primary[50],
        active: upwisePalette.primary[100],
        disabled: upwisePalette.isabelline[700],
      },
    },
    themeButton: {
      bgColor: {
        hover: upwisePalette.primary[700],
        active: upwisePalette.primary[700],
      },
      fontColor: {
        default: upwisePalette.primary[200],
        hover: upwisePalette.primary[50],
        active: upwisePalette.primary[100],
        disabled: upwisePalette.isabelline[700],
      },
    },
  },
};

export default constants;
