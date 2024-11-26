import { Theme } from '@nayya-com/wardrobe';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export type PillVariant =
  | 'recommended'
  | 'recommendedBorderless'
  | 'recommendedBordered'
  | 'planHighlights'
  | 'waived';

export type PillProps = {
  id?: string;
  variant: PillVariant;
  text: string;
  icon?: JSX.Element;
};

export type StyledPillProps = {
  variant: PillVariant;
};
