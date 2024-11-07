import { DynamicColors } from 'types';

import * as adp from './adp';
import * as nayya from './nayya';
import * as upwise from './upwise';

const dynamicColors: {
  adp: DynamicColors;
  nayya: DynamicColors;
  upwise: DynamicColors;
} = {
  adp,
  nayya,
  upwise,
};

export { dynamicColors };
