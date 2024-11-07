import { ButtonConstants } from '../../../types';
import { palette } from '../../palette';

const nayyaPalette = palette.nayya;

const constants: ButtonConstants = {
  light: {
    background: '#fff',
    button: {
      bgColor: {
        default: nayyaPalette.primary[600],
        hover: nayyaPalette.primary[400],
        active: nayyaPalette.primary[500],
        disabled: nayyaPalette.isabelline[300],
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
        default: nayyaPalette.primary[600],
        hover: nayyaPalette.primary[400],
        active: nayyaPalette.primary[500],
        disabled: nayyaPalette.isabelline[300],
      },
    },
    themeButton: {
      bgColor: {
        hover: nayyaPalette.primary[50],
        active: nayyaPalette.primary[100],
      },
      fontColor: {
        default: nayyaPalette.primary[600],
        hover: nayyaPalette.primary[400],
        active: nayyaPalette.primary[500],
        disabled: nayyaPalette.isabelline[300],
      },
    },
  },
  dark: {
    background: nayyaPalette.primary[800],
    button: {
      bgColor: {
        default: nayyaPalette.primary[400],
        hover: nayyaPalette.primary[200],
        active: nayyaPalette.primary[300],
        disabled: nayyaPalette.isabelline[700],
      },
      fontColor: {
        default: '#fff',
        hover: '#fff',
        active: '#fff',
        disabled: nayyaPalette.isabelline[400],
      },
    },
    outlinedButton: {
      fontColor: {
        default: nayyaPalette.primary[200],
        hover: nayyaPalette.primary[50],
        active: nayyaPalette.primary[100],
        disabled: nayyaPalette.isabelline[700],
      },
    },
    themeButton: {
      bgColor: {
        hover: nayyaPalette.primary[700],
        active: nayyaPalette.primary[700],
      },
      fontColor: {
        default: nayyaPalette.primary[200],
        hover: nayyaPalette.primary[50],
        active: nayyaPalette.primary[100],
        disabled: nayyaPalette.isabelline[700],
      },
    },
  },
};

export default constants;
