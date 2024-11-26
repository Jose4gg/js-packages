import { AriaAttributes } from 'react';

export interface FillIconProps {
  size?: number;
  fillColor: string;
  className?: string;
  ariaAttributes?: AriaAttributes;
}

export interface StrokeIconProps {
  size?: number;
  strokeColor: string;
  className?: string;
  ariaAttributes?: AriaAttributes;
}
