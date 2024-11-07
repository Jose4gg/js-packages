import { Link, Palette } from '../../types';
import { palette } from '../palette';

const buildLinksStyles = ({
  paletteVariant,
  bodyFontFamily,
}: {
  paletteVariant: Palette;
  bodyFontFamily: string;
}): Link => {
  return {
    base: {
      styles: {
        fontFamily: bodyFontFamily,
        fontSize: '1rem',
        padding: '0 0 2px 0',
        letterSpacing: '-0.5px',
        textDecoration: 'none',
        fontWeight: 'normal',
      },
      states: {
        hover: {
          textDecoration: 'underline',
          textUnderlineOffset: '2px',
          textDecorationThickness: '2px',
        },
      },
    },
    light: {
      styles: {
        color: paletteVariant.primary[600],
        backgroundColor: 'transparent',
      },
      states: {
        hover: {
          color: paletteVariant.primary[400],
          textDecorationColor: paletteVariant.primary[400],
          backgroundColor: 'transparent',
        },
        active: {
          color: paletteVariant.primary[500],
          backgroundColor: 'transparent',
        },
        disabled: {
          color: paletteVariant.isabelline[300],
          cursor: 'not-allowed',
          textDecoration: 'none',
          backgroundColor: 'transparent',
        },
      },
    },
    dark: {
      styles: {
        color: paletteVariant.primary[200],
        backgroundColor: 'transparent',
      },
      states: {
        hover: {
          color: paletteVariant.primary[50],
          textDecorationColor: paletteVariant.primary[50],
          backgroundColor: 'transparent',
        },
        active: {
          color: paletteVariant.primary[100],
          backgroundColor: 'transparent',
        },
        disabled: {
          color: paletteVariant.isabelline[700],
          cursor: 'not-allowed',
          textDecoration: 'none',
          backgroundColor: 'transparent',
        },
      },
    },
  };
};

const links: { adp: Link; nayya: Link } = {
  adp: buildLinksStyles({
    paletteVariant: palette.adp,
    bodyFontFamily: 'Circular20, sans-serif',
  }),
  nayya: buildLinksStyles({
    paletteVariant: palette.nayya,
    bodyFontFamily: 'Inter, sans-serif',
  }),
};

export { links };
