import { palette } from 'src/looks/palette';
import { ButtonConfig } from 'types';

const hoveredState = {
  hoveredTextColor: {
    light: {
      normal: '#FFF',
      outlined: palette.nayya.primary[400],
      link: palette.nayya.primary[400],
      text: palette.nayya.primary[400],
    },
    dark: {
      normal: '#FFF',
      outlined: palette.nayya.primary[100],
      link: palette.nayya.primary[200],
      text: palette.nayya.primary[100],
    },
  },
  hoveredBackgroundColor: {
    light: {
      normal: palette.nayya.primary[400],
      outlined: 'transparent',
      link: 'transparent',
      text: palette.nayya.primary[50],
    },
    dark: {
      normal: palette.nayya.primary[200],
      outlined: 'transparent',
      link: 'transparent',
      text: palette.nayya.primary[700],
    },
  },
  hoveredBorderColor: {
    light: {
      outlined: palette.nayya.primary[400],
    },
    dark: {
      outlined: palette.nayya.primary[100],
    },
  },
};

const activeState = {
  activeTextColor: {
    light: {
      normal: '#FFF',
      outlined: palette.nayya.primary[500],
      link: palette.nayya.primary[500],
      text: palette.nayya.primary[500],
    },
    dark: {
      normal: '#FFF',
      outlined: palette.nayya.primary[100],
      link: palette.nayya.primary[100],
      text: palette.nayya.primary[100],
    },
  },
  activeBackgroundColor: {
    light: {
      normal: palette.nayya.primary[500],
      outlined: 'transparent',
      link: 'transparent',
      text: palette.nayya.primary[100],
    },
    dark: {
      normal: palette.nayya.primary[300],
      outlined: 'transparent',
      link: 'transparent',
      text: palette.nayya.primary[700],
    },
  },
  activeBorderColor: {
    light: {
      outlined: palette.nayya.primary[500],
    },
    dark: {
      outlined: palette.nayya.primary[100],
    },
  },
};

const loadingState = {
  loadingTextColor: {
    light: {
      normal: '#FFF',
      outlined: palette.nayya.primary[500],
      link: palette.nayya.primary[500],
      text: palette.nayya.primary[500],
    },
    dark: {
      normal: '#FFF',
      outlined: palette.nayya.primary[100],
      link: palette.nayya.primary[100],
      text: palette.nayya.primary[100],
    },
  },
  loadingBackgroundColor: {
    light: {
      normal: palette.nayya.primary[500],
      outlined: 'transparent',
      link: 'transparent',
      text: 'transparent',
    },
    dark: {
      normal: '#FFF',
      outlined: palette.nayya.primary[500],
      link: 'transparent',
      text: 'transparent',
    },
  },
  loadingBorderColor: {
    light: {
      outlined: palette.nayya.primary[500],
    },
    dark: {
      outlined: palette.nayya.primary[100],
    },
  },
};

const disabledState = {
  disabledTextColor: {
    light: {
      normal: '#FFF',
      outlined: palette.nayya.isabelline[300],
      link: palette.nayya.isabelline[300],
      text: palette.nayya.isabelline[300],
    },
    dark: {
      normal: palette.nayya.isabelline[400],
      outlined: palette.nayya.isabelline[700],
      link: palette.nayya.isabelline[700],
      text: palette.nayya.isabelline[700],
    },
  },
  disabledBackgroundColor: {
    light: {
      normal: palette.nayya.isabelline[300],
      outlined: 'transparent',
      link: 'transparent',
      text: 'transparent',
    },
    dark: {
      normal: palette.nayya.isabelline[700],
      outlined: 'transparent',
      link: 'transparent',
      text: 'transparent',
    },
  },
  disabledBorderColor: {
    light: {
      outlined: palette.nayya.isabelline[300],
    },
    dark: {
      outlined: palette.nayya.isabelline[700],
    },
  },
};

const buttonConfig: ButtonConfig = {
  textColor: {
    light: {
      normal: '#FFF',
      outlined: palette.nayya.primary[600],
      link: palette.nayya.primary[600],
      text: palette.nayya.primary[600],
    },
    dark: {
      normal: '#FFF',
      outlined: '#FFF',
      link: '#FFF',
      text: '#FFF',
    },
  },
  backgroundColor: {
    light: {
      normal: palette.nayya.primary[600],
      outlined: 'transparent',
      link: 'transparent',
      text: 'transparent',
    },
    dark: {
      normal: palette.nayya.primary[400],
      outlined: 'transparent',
      link: 'transparent',
      text: 'transparent',
    },
  },
  borderColor: {
    light: {
      outlined: palette.nayya.primary[600],
    },
    dark: {
      outlined: '#FFF',
    },
  },
  fonts: {
    common: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    mini: {
      fontSize: '0.875rem',
      fontWeight: 600,
    },
  },
  sizes: {
    common: {
      border: '1px solid',
      borderRadius: '0.25rem',
      marketingBorderRadius: '1.3125rem',
    },
    mini: {
      border: '1px solid',
      borderRadius: '0.25rem',
      marketingBorderRadius: '1.3125rem',
    },
  },
  ...hoveredState,
  ...activeState,
  ...loadingState,
  ...disabledState,
};

export default buttonConfig;
