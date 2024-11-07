import { Pill, Palette } from 'types';

import {
  ADP_BODY_FONT_FAMILY,
  NAYYA_BODY_FONT_FAMILY,
  UPWISE_BODY_FONT_FAMILY,
} from '../../constants';
import { palette } from '../palette';

const buildPillsStyles = ({
  paletteVariant,
  bodyFontFamily,
}: {
  paletteVariant: Palette;
  bodyFontFamily: string;
}): Pill => {
  return {
    styles: {
      fontFamily: bodyFontFamily,
      borderRadius: '0.8125rem',
      padding: '0.375rem 0.75rem',
      fontSize: '0.75rem',
      fontWeight: '400',
      lineHeight: '0.875rem',
      color: '#fff',
    },
    variants: {
      recommended: {
        backgroundColor: paletteVariant.sinbad[600],
      },
      optional: {
        backgroundColor: paletteVariant.isabelline[900],
      },
      modified: {
        backgroundColor: paletteVariant.isabelline[700],
      },
      waived: {
        backgroundColor: paletteVariant.isabelline[300],
      },
    },
  };
};

const pills: { adp: Pill; nayya: Pill; upwise: Pill } = {
  adp: buildPillsStyles({
    paletteVariant: palette.adp,
    bodyFontFamily: ADP_BODY_FONT_FAMILY,
  }),
  nayya: buildPillsStyles({
    paletteVariant: palette.adp,
    bodyFontFamily: NAYYA_BODY_FONT_FAMILY,
  }),
  upwise: buildPillsStyles({
    paletteVariant: palette.upwise,
    bodyFontFamily: UPWISE_BODY_FONT_FAMILY,
  }),
};

export { pills };
