import { palette } from 'src/looks/palette';
import { ButtonConfig } from 'types';

const hoveredState = {
  hoveredTextColor: {
    light: {
      normal: '#FFF',
      outlined: palette.upwise.primary[900],
      link: palette.upwise.primary[900],
      text: palette.upwise.primary[900],
    },
    dark: {
      normal: palette.upwise.primary[600],
      outlined: palette.upwise.primary[200],
      link: '#FFF',
      text: '#FFF',
    },
  },
  hoveredBackgroundColor: {
    light: {
      normal: palette.upwise.primary[900],
      outlined: 'transparent',
      link: 'transparent',
      text: palette.upwise.primary[50],
    },
    dark: {
      normal: palette.upwise.primary[400],
      outlined: 'transparent',
      link: 'transparent',
      text: palette.upwise.primary[900],
    },
  },
  hoveredBorderColor: {
    light: {
      outlined: palette.nayya.primary[900],
    },
    dark: {
      outlined: palette.nayya.primary[200],
    },
  },
};

const activeState = {
  activeTextColor: {
    light: {
      normal: '#FFF',
      outlined: palette.upwise.primary[900],
      link: palette.upwise.primary[900],
      text: palette.upwise.primary[900],
    },
    dark: {
      normal: '#FFF',
      outlined: palette.upwise.primary[600],
      link: '#FFF',
      text: '#FFF',
    },
  },
  activeBackgroundColor: {
    light: {
      normal: palette.upwise.primary[900],
      outlined: 'transparent',
      link: 'transparent',
      text: palette.upwise.primary[200],
    },
    dark: {
      normal: palette.upwise.primary[600],
      outlined: 'transparent',
      link: 'transparent',
      text: palette.upwise.primary[900],
    },
  },
  activeBorderColor: {
    light: {
      outlined: palette.nayya.primary[900],
    },
    dark: {
      outlined: palette.nayya.primary[600],
    },
  },
};

const loadingState = {
  loadingTextColor: {
    light: {
      normal: '#FFF',
      outlined: palette.upwise.primary[600],
      link: palette.upwise.primary[600],
      text: palette.upwise.primary[600],
    },
    dark: {
      normal: '#FFF',
      outlined: palette.upwise.primary[600],
      link: palette.upwise.primary[600],
      text: palette.upwise.primary[600],
    },
  },
  loadingBackgroundColor: {
    light: {
      normal: palette.upwise.primary[600],
      outlined: 'transparent',
      link: 'transparent',
      text: 'transparent',
    },
    dark: {
      normal: '#FFF',
      outlined: palette.upwise.primary[600],
      link: 'transparent',
      text: 'transparent',
    },
  },
  loadingBorderColor: {
    light: {
      outlined: palette.nayya.primary[600],
    },
    dark: {
      outlined: palette.nayya.primary[600],
    },
  },
};

const disabledState = {
  disabledTextColor: {
    light: {
      normal: '#FFF',
      outlined: palette.upwise.isabelline[300],
      link: palette.upwise.isabelline[300],
      text: palette.upwise.isabelline[300],
    },
    dark: {
      normal: palette.upwise.isabelline[300],
      outlined: palette.upwise.isabelline[600],
      link: palette.upwise.isabelline[600],
      text: palette.upwise.isabelline[600],
    },
  },
  disabledBackgroundColor: {
    light: {
      normal: palette.upwise.isabelline[300],
      outlined: 'transparent',
      link: 'transparent',
      text: 'transparent',
    },
    dark: {
      normal: palette.upwise.isabelline[500],
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
      outlined: palette.nayya.isabelline[600],
    },
  },
};

const buttonConfig: ButtonConfig = {
  textColor: {
    light: {
      normal: '#FFF',
      outlined: palette.upwise.primary[600],
      link: palette.upwise.primary[400],
      text: palette.upwise.primary[600],
    },
    dark: {
      normal: palette.upwise.primary[600],
      outlined: '#FFF',
      link: '#FFF',
      text: '#FFF',
    },
  },
  backgroundColor: {
    light: {
      normal: palette.upwise.primary[600],
      outlined: 'transparent',
      link: 'transparent',
      text: 'transparent',
    },
    dark: {
      normal: '#FFFFFF',
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
      fontWeight: 700,
    },
    mini: {
      fontSize: '0.875rem',
      fontWeight: 700,
    },
  },
  sizes: {
    common: {
      border: '1px solid',
      borderRadius: '0.25rem',
      marketingBorderRadius: '1.875rem',
    },
    mini: {
      border: '1px solid',
      borderRadius: '0.25rem',
      marketingBorderRadius: '1.875rem',
    },
  },
  ...hoveredState,
  ...activeState,
  ...loadingState,
  ...disabledState,
};

export default buttonConfig;
