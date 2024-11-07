import { palette } from 'src/looks/palette';
import adpTypography from 'src/looks/typography/adpTypography';
import { TooltipConfig } from 'types';

const tooltipConfig: TooltipConfig = {
  fontFamily: adpTypography.bodyFont,
  textColor: palette.adp.primary[700],
};

export default tooltipConfig;
