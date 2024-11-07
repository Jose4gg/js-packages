import { palette } from 'src/looks/palette';
import upwiseTypography from 'src/looks/typography/upwiseTypography';
import { TooltipConfig } from 'types';

const tooltipConfig: TooltipConfig = {
  fontFamily: upwiseTypography.bodyFont,
  textColor: palette.upwise.primary[600],
};

export default tooltipConfig;
