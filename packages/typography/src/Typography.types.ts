import { Theme } from '@nayya-com/wardrobe';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export enum TypographyOptionsEnum {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  SUPER1 = 'super1',
  SUPER2 = 'super2',
  SUPER3 = 'super3',
  BODY1 = 'body1',
  BODY2 = 'body2',
  BODY3 = 'body3',
  FINE_PRINT = 'finePrint',
  LABEL1 = 'label1',
  LABEL2 = 'label2',
  LABEL3 = 'label3',
  LABEL4 = 'label4',
  SPAN = 'span',
}

export type TypographyOptions =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'super1'
  | 'super2'
  | 'super3'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'finePrint'
  | 'label1'
  | 'label2'
  | 'label3'
  | 'label4'
  | 'span';

export interface TypographyProps {
  /**
   * Options for element and style
   *
   * h1-h5
   *
   * super1-3
   *
   * body1-3
   *
   * finePrint
   *
   * label1-4
   *  */
  variant: TypographyOptions;
  /** Adds bold to className when true */
  bold?: boolean;
  /**
   * Override the HTML element to render, while maintaining the same styles
   *
   * ex: `<Typography variant="h3" as="h1">` will render an h1 element with the styles of the h3 variant
   */
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  /**
   * TODO: Remove this prop in the future
   *
   * Same behavior as `as`, used by components that extend Typography, ex: SurveyHeader
   *
   * ```tsx
   * const SurveyHeader = styled(Typography)
   * ```
   *
   * ex: `<SurveyHeader variant="h3" asTag="h1">` will render an h1 element with the styles of the h3 variant
   */
  asTag?: React.ElementType | keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Optional test id for use with react testing library */
  testId?: string;
}
