import { Theme } from '@nayya-com/wardrobe';
import 'styled-components';
import { HTMLAttributes } from 'react';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

export type TooltipProps = HTMLAttributes<HTMLDivElement> & {
  id: string;
  placement?: TooltipPlacement;
  label: string;
  type?: 'default' | 'text';
  text?: string;
  children?: React.ReactNode;
};
