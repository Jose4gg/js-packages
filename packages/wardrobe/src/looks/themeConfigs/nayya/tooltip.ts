import { palette } from 'src/looks/palette';
import nayyaTypography from 'src/looks/typography/nayyaTypography';
import { TooltipConfig } from 'types';

const tooltipConfig: TooltipConfig = {
  fontFamily: nayyaTypography.bodyFont,
  textColor: palette.nayya.primary[600],
};

export default tooltipConfig;
