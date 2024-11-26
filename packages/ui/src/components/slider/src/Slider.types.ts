import { Theme } from '@nayya-com/wardrobe';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export type Orientation = 'vertical' | 'horizontal';

export type SliderProps = {
  value: number;
  min: number;
  max: number;
  step: number;
  style?: Record<string, string>;
  id: string;
  orientation?: Orientation;
  ariaLabel?: string;
  thumbContent?: React.ReactNode;
  onChange: (value: number) => void;
  defaultValue?: number;
  tabIndex?: number;
  isCurrency?: boolean;
};

export interface DefaultProps {
  percent: number;
  orientation: Orientation;
}

export interface TrackProps {
  orientation: Orientation;
}
