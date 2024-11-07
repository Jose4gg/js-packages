import { Typography } from 'types';

import { palette } from '../palette';

const nayyaPalette = palette.nayya;

const headingFontFamily = 'Circular, sans-serif';
const bodyFontFamily = 'Inter, sans-serif';
const fontColor = nayyaPalette.isabelline[900];
const superWeight = '900';
const headerWeight = 'bold';
const labelSpacing = '-0.5px';

const supers = {
  super1: {
    color: fontColor,
    fontFamily: headingFontFamily,
    fontWeight: superWeight,
    fontSize: '4.1875rem',
    letterSpacing: '-1.5px',
    lineHeight: '4.75rem',
  },
  super2: {
    color: fontColor,
    fontFamily: headingFontFamily,
    fontWeight: superWeight,
    fontSize: '5.625rem',
    letterSpacing: '-2px',
    lineHeight: '6.375rem',
  },
  super3: {
    color: fontColor,
    fontFamily: headingFontFamily,
    fontWeight: superWeight,
    fontSize: '7.5rem',
    letterSpacing: '-3px',
    lineHeight: '8.5rem',
  },
};

const headers = {
  h1: {
    color: fontColor,
    fontWeight: headerWeight,
    fontFamily: headingFontFamily,
    letterSpacing: '-1px',
    fontSize: '3.1875rem',
    lineHeight: '4.25rem',
  },
  h2: {
    color: fontColor,
    fontFamily: headingFontFamily,
    fontWeight: headerWeight,
    fontSize: '2.375rem',
    letterSpacing: '-1px',
    lineHeight: '3.25rem',
  },
  h3: {
    color: fontColor,
    fontFamily: headingFontFamily,
    fontWeight: headerWeight,
    fontSize: '1.75rem',
    letterSpacing: '-0.5px',
    lineHeight: '2.375rem',
  },
  h4: {
    color: fontColor,
    fontFamily: headingFontFamily,
    fontWeight: headerWeight,
    fontSize: '1.3125rem',
    letterSpacing: '-0.5px',
    lineHeight: '1.875rem',
  },
  h5: {
    color: fontColor,
    fontFamily: headingFontFamily,
    fontWeight: headerWeight,
    fontSize: '1rem',
    letterSpacing: '-0.5px',
    lineHeight: '1.875rem',
  },
};

const bodys = {
  body1: {
    color: fontColor,
    fontFamily: bodyFontFamily,
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
  },
  body2: {
    color: fontColor,
    fontFamily: bodyFontFamily,
    fontSize: '1rem',
    lineHeight: '1.625rem',
  },
  body3: {
    color: fontColor,
    fontFamily: bodyFontFamily,
    fontSize: '1.3125rem',
    letterSpacing: '-0.5px',
    lineHeight: '2.25rem',
  },
};

const paragraphSpacing = {
  body1Spacing: {
    margin: '0.75rem 0 0 0',
  },
  body2Spacing: {
    margin: '0.875rem 0 0 0',
  },
  body3Spacing: {
    margin: '1rem 0 0 0',
  },
};

const labels = {
  label1: {
    color: fontColor,
    fontFamily: bodyFontFamily,
    fontSize: '0.625rem',
    lineHeight: '0.75rem',
    letterSpacing: labelSpacing,
  },
  label2: {
    color: fontColor,
    fontFamily: bodyFontFamily,
    fontSize: '0.75rem',
    lineHeight: '0.875rem',
    letterSpacing: labelSpacing,
  },
  label3: {
    color: fontColor,
    fontFamily: bodyFontFamily,
    fontSize: '0.875rem',
    lineHeight: '1rem',
    letterSpacing: labelSpacing,
  },
  label4: {
    color: fontColor,
    fontFamily: bodyFontFamily,
    fontSize: '1rem',
    lineHeight: '1.25rem',
    letterSpacing: labelSpacing,
  },
};

const nayyaTypography: Typography = {
  // Supers
  ...supers,
  // Headers
  ...headers,
  // Body
  ...bodys,
  // Paragraph Spacing
  ...paragraphSpacing,
  // Labels
  ...labels,
  // Fine Print
  finePrint: {
    color: fontColor,
    fontFamily: bodyFontFamily,
    fontSize: '0.75rem',
    lineHeight: '1.25rem',
  },
  bodyFont: bodyFontFamily,
  headerFont: headingFontFamily,
};

export default nayyaTypography as Typography;
