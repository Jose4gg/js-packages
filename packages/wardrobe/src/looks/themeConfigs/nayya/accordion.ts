import { palette } from 'src/looks/palette';
import { AccordionConfig } from 'types';

const accordionConfig: AccordionConfig = {
  borderRadius: '0.125rem',
  border: 'none',
  headerBorderTop: `1px solid ${palette.nayya.isabelline[100]}`,
  headerColor: palette.nayya.primary[600],
  iconColor: palette.nayya.primary[600],
  lastItemBorderBottom: `1px solid ${palette.nayya.isabelline[100]}`,
  panelBorderTop: `1px solid ${palette.nayya.isabelline[100]}`,
};

export default accordionConfig;
