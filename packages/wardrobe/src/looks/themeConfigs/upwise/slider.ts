import { palette } from 'src/looks/palette';
import upwiseTypography from 'src/looks/typography/upwiseTypography';
import { SliderConfig } from 'types';

const sliderConfig: SliderConfig = {
  containerPadding: '1.875rem 0 0 0',
  verticalPadding: '0 0 0 1.25rem',
  horizontalPadding: '1.25rem 0 0 0',
  fontSize: '0.875rem',
  fontFamily: upwiseTypography.bodyFont,
  thumbHeight: '1.75rem',
  thumbWidth: '1.75rem',
  trackHeight: '0.75rem',
  trackWidth: '0.75rem',
  border: `0.125rem  solid ${palette.upwise.primary[600]}`,
  trackBorder: `0.0625rem solid ${palette.upwise.primary[600]}`,
  fill: palette.upwise.isabelline[800],
  background: palette.upwise.primary[600],
  borderRadius: '0.9375rem',
  zIndex: 5,
  thumbZIndex: 10,
};

export default sliderConfig;