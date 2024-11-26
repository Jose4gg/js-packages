import { AriaAttributes } from 'react';

export interface FillIconProps {
  size?: number;
  fillColor: string;
  className?: string;
  ariaAttributes?: AriaAttributes;
}

export interface DisplayValueProps {
  size?: number;
  value: number | string;
  className?: string;
  ariaAttributes?: AriaAttributes;
}
