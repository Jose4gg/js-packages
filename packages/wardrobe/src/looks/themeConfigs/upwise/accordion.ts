import { palette } from 'src/looks/palette';
import { AccordionConfig } from 'types';

const accordionConfig: AccordionConfig = {
  borderRadius: '0.125rem',
  border: 'none',
  headerBorderTop: `1px solid ${palette.upwise.isabelline[100]}`,
  headerColor: palette.upwise.primary[600],
  iconColor: palette.upwise.primary[600],
  lastItemBorderBottom: `1px solid ${palette.upwise.isabelline[100]}`,
  panelBorderTop: `1px solid ${palette.upwise.isabelline[100]}`,
};

export default accordionConfig;
