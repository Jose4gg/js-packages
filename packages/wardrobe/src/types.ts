// Config types

export type TextInputConfig = {
  borderRadius: string;
  borderColor: string;
  fontFamily: string;
  labelColor: string;
  helperTextColor: string;
  textColor: string;
  placeholderColor: string;
  spinnerColor: string;
  actionButtonColor: string;
  state: {
    focus: {
      borderColor: string;
      spinnerColor: string;
    };
    warning: {
      borderColor: string;
      helperTextColor: string;
      spinnerColor: string;
      actionButtonColor: string;
    };
    error: {
      borderColor: string;
      helperTextColor: string;
      spinnerColor: string;
      actionButtonColor: string;
    };
    disabled: {
      borderColor: string;
      backgroundColor: string;
      labelColor: string;
      helperTextColor: string;
      actionButtonColor: string;
      textColor: string;
    };
  };
};

export type ButtonConfig = {
  textColor: {
    light: {
      normal: string;
      outlined: string;
      link: string;
      text: string;
    };
    dark: {
      normal: string;
      outlined: string;
      link: string;
      text: string;
    };
  };
  backgroundColor: {
    light: {
      normal: string;
      outlined: string;
      link: string;
      text: string;
    };
    dark: {
      normal: string;
      outlined: string;
      link: string;
      text: string;
    };
  };
  borderColor: {
    light: {
      outlined: string;
    };
    dark: {
      outlined: string;
    };
  };
  hoveredTextColor: {
    light: {
      normal: string;
      outlined: string;
      link: string;
      text: string;
    };
    dark: {
      normal: string;
      outlined: string;
      link: string;
      text: string;
    };
  };
  hoveredBackgroundColor: {
    light: {
      normal: string;
      outlined: string;
      link: string;
      text: string;
    };
    dark: {
      normal: string;
      outlined: string;
      link: string;
      text: string;
    };
  };
  hoveredBorderColor: {
    light: {
      outlined: string;
    };
    dark: {
      outlined: string;
    };
  };
  activeTextColor: {
    light: {
      normal: string;
      outlined: string;
      link: string;
      text: string;
    };
    dark: {
      normal: string;
      outlined: string;
      link: string;
      text: string;
    };
  };
  activeBackgroundColor: {
    light: {
      normal: string;
      outlined: string;
      link: string;
      text: string;
    };
    dark: {
      normal: string;
      outlined: string;
      link: string;
      text: string;
    };
  };
  activeBorderColor: {
    light: {
      outlined: string;
    };
    dark: {
      outlined: string;
    };
  };
  loadingTextColor: {
    light: {
      normal: string;
      outlined: string;
      link: string;
      text: string;
    };
    dark: {
      normal: string;
      outlined: string;
      link: string;
      text: string;
    };
  };
  loadingBackgroundColor: {
    light: {
      normal: string;
      outlined: string;
      link: string;
      text: string;
    };
    dark: {
      normal: string;
      outlined: string;
      link: string;
      text: string;
    };
  };
  loadingBorderColor: {
    light: {
      outlined: string;
    };
    dark: {
      outlined: string;
    };
  };
  disabledTextColor: {
    light: {
      normal: string;
      outlined: string;
      link: string;
      text: string;
    };
    dark: {
      normal: string;
      outlined: string;
      link: string;
      text: string;
    };
  };
  disabledBackgroundColor: {
    light: {
      normal: string;
      outlined: string;
      link: string;
      text: string;
    };
    dark: {
      normal: string;
      outlined: string;
      link: string;
      text: string;
    };
  };
  disabledBorderColor: {
    light: {
      outlined: string;
    };
    dark: {
      outlined: string;
    };
  };
  fonts: {
    common: {
      fontSize: string;
      fontWeight: number;
    };
    mini: {
      fontSize: string;
      fontWeight: number;
    };
  };
  sizes: {
    common: {
      border: string;
      borderRadius: string;
      marketingBorderRadius: string;
    };
    mini: {
      border: string;
      borderRadius: string;
      marketingBorderRadius: string;
    };
  };
};

export type PillConfig = {
  fontFamily: string;
  recommendedVariant: {
    backgroundColor: string;
    border: string;
    color: string;
  };
  recommendedBorderlessVariant: {
    backgroundColor: string;
    border: string;
    color: string;
  };
  recommendedBorderedVariant: {
    backgroundColor: string;
    border: string;
    color: string;
  };
  planHighlightsVariant: {
    backgroundColor: string;
    border: string;
    color: string;
  };
  waivedVariant: {
    backgroundColor: string;
    border: string;
    color: string;
  };
};

type ModalSizes = {
  width: string;
  height: string;
  maxHeight: string;
  top: string;
};

export type ModalConfig = {
  sizes: {
    sm: ModalSizes;
    md: ModalSizes;
    lg: ModalSizes;
    full: ModalSizes;
  };
  zIndex: number;
};

export type CheckboxConfig = {
  borderRadius: string;
  checkMarkHeight: string;
  checkMarkWidth: string;
  fontFamily: string;
  inputHeight: string;
  inputWidth: string;
  labelMargin: string;
  state: {
    error: {
      borderColor: string;
    };
    focused: {
      labelBorder: string;
      checkboxBorder: string;
    };
    checked: {
      checkboxBorder: string;
      background: string;
      checkMarkColor: string;
      labelBorder: string;
      textColor: string;
    };
    unchecked: {
      checkboxBorder: string;
      background: string;
      labelBorder: string;
      textColor: string;
    };
    disabledChecked: {
      checkboxBorder: string;
      background: string;
      checkMarkColor: string;
      labelBorder: string;
      textColor: string;
    };
    disabledUnchecked: {
      checkboxBorder: string;
      background: string;
      labelBorder: string;
      textColor: string;
    };
    helperText: {
      normal: string;
      error: string;
    };
  };
};

export type SelectInputConfig = {
  display: string;
  fontFamily: string;
  height: string;
  border: string;
  borderRadius: string;
  iconColor: string;
  labelColor: string;
  labelFontSize: string;
  helperTextColor: string;
  textColor: string;
  placeholderColor: string;
  marginTop: string;
  valueTopOffset: string;
  multiSelectMarginTop: string;
  inputMargin: string;
  menuZIndex: number;
  maxMenuHeight: number;
  state: {
    focus: {
      border: string;
      iconColor: string;
      listItemFocusBackgroundColor: string;
    };
    warning: {
      border: string;
      iconColor: string;
      helperTextColor: string;
    };
    error: {
      border: string;
      iconColor: string;
      helperTextColor: string;
    };
    disabled: {
      border: string;
      backgroundColor: string;
      iconColor: string;
      labelColor: string;
      helperTextColor: string;
      textColor: string;
    };
  };
};

export type RadioButtonConfig = {
  fontFamily: string;
  borderRadius: string;
  innerCircleHeight: string;
  innerCircleWidth: string;
  hoverMargin: string;
  labelBorder: string;
  labelPadding: string;
  radioBorder: string;
  radioHeight: string;
  radioWidth: string;
  textColor: string;
  labelGap: string;
  state: {
    error: {
      borderColor: string;
    };
    focused: {
      labelBorder: string;
      radioBorder: string;
    };
    checked: {
      background: string;
      labelBorder: string;
      radioBorder: string;
      textColor: string;
    };
    disabledChecked: {
      background: string;
      labelBorder: string;
      labelBackground: string;
      radioBorder: string;
      textColor: string;
    };
    disabledUnchecked: {
      background: string;
      labelBackground: string;
      labelBorder: string;
      radioBorder: string;
      textColor: string;
    };
    helperText: {
      normal: string;
      error: string;
    };
  };
};

export type SliderConfig = {
  containerPadding: string;
  verticalPadding: string;
  horizontalPadding: string;
  fontSize: string;
  fontFamily: string;
  thumbHeight: string;
  thumbWidth: string;
  trackHeight: string;
  trackWidth: string;
  border: string;
  trackBorder: string;
  fill: string;
  background: string;
  borderRadius: string;
  zIndex: number;
  thumbZIndex: number;
};

type SwitchStateStyle = {
  checked: {
    background: string;
  };
  unchecked: {
    background: string;
  };
};

export type SwitchConfig = {
  light: SwitchStateStyle;
  dark: SwitchStateStyle;
};

export type AccordionConfig = {
  borderRadius: string;
  border: string;
  headerBorderTop: string;
  headerColor: string;
  iconColor: string;
  lastItemBorderBottom: string;
  panelBorderTop: string;
};

export type TooltipConfig = {
  fontFamily: string;
  textColor: string;
};

export type ThemeConfig = {
  accordion: AccordionConfig;
  button: ButtonConfig;
  checkbox: CheckboxConfig;
  textInput: TextInputConfig;
  pill: PillConfig;
  modal: ModalConfig;
  radioButton: RadioButtonConfig;
  selectInput: SelectInputConfig;
  slider: SliderConfig;
  switch: SwitchConfig;
  tooltip: TooltipConfig;
};

// Button types
export type Buttons = {
  base: ButtonBase;
  light: ButtonTheme;
  dark: ButtonTheme;
};

export interface ButtonTheme extends ButtonProps {
  variants: ButtonVariants;
}

export type ButtonVariants = {
  outlined: ButtonProps;
  text: ButtonProps;
  marketing: {
    styles: ButtonStyles;
    states?: ButtonStates;
  };
};

export type ButtonStates = {
  hover?: ButtonStyles;
  active?: ButtonStyles;
  loading?: ButtonStyles;
  disabled?: ButtonStyles;
};

export type ButtonStyles = {
  backgroundColor?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
  color?: string;
  padding?: string;
  height?: string;
  borderRadius?: string;
  border?: string;
  borderColor?: string;
  boxSizing?: 'border-box' | 'content-box';
  cursor?: 'pointer' | 'default' | 'not-allowed' | 'wait';
};

export type ButtonProps = {
  styles: ButtonStyles;
  states: ButtonStates;
};

export type ButtonBase = {
  styles: ButtonStyles;
  states: ButtonStates;
  variantStyles: {
    mini: {
      fontSize: string;
      lineHeight: string;
      padding: string;
      height: string;
    };
    large: {
      lineHeight: string;
      padding: string;
    };
  };
};

// Typography types
export type TypographyStyles = {
  fontFamily: string;
  fontSize: string;
  fontWeight?: string;
  lineHeight: string;
  letterSpacing?: string;
  color: string;
};

// Button Constants type
export interface ButtonConstants {
  light: ThemeConstants;
  dark: ThemeConstants;
}

export interface ThemeConstants {
  background: string;
  button: Button;
  outlinedButton: OutlinedButton;
  themeButton: ThemeButton;
}

export interface Button {
  bgColor: BgColor;
  fontColor: FontColor;
}

export interface BgColor {
  default?: string;
  hover: string;
  active?: string;
  disabled?: string;
}

export interface FontColor {
  default: string;
  hover: string;
  active: string;
  disabled: string;
}

export interface OutlinedButton {
  fontColor: FontColor;
}

export interface ThemeButton {
  bgColor: BgColor;
  fontColor: FontColor;
}

// Pill types
export type Pill = {
  styles: {
    fontFamily: string;
    borderRadius: string;
    padding: string;
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
    color: string;
  };
  variants: PillVariants;
};

export type PillVariants = {
  recommended: PillVariant;
  optional: PillVariant;
  modified: PillVariant;
  waived: PillVariant;
};

export type PillVariant = {
  backgroundColor: string;
};

// Link types
export interface LinkStates {
  hover: {
    color: string;
    textDecorationColor: string;
    backgroundColor: string;
  };
  active: {
    color: string;
    backgroundColor: string;
  };
  disabled: {
    color: string;
    cursor: 'not-allowed';
    textDecoration: string;
    backgroundColor: string;
  };
}

export interface LinkBase {
  styles: {
    fontFamily: string;
    fontSize: string;
    padding: string;
    letterSpacing: string;
    textDecoration: string;
    fontWeight: string;
  };
  states: {
    hover: {
      textDecoration: string;
      textUnderlineOffset: string;
      textDecorationThickness: string;
    };
  };
}

export interface LinkVariant {
  styles: { color: string; backgroundColor: string };
  states: LinkStates;
}

export interface Link {
  base: LinkBase;
  light: LinkVariant;
  dark: LinkVariant;
}

export interface Breakpoints {
  base: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
  mobileMax: string;
  tabletMax: string;
}

export interface ColorWeights {
  '50': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
}

export type Palette = {
  isabelline: ColorWeights;
  primary: ColorWeights;
  sinbad: ColorWeights;
  navajo: ColorWeights;
  vermilion: ColorWeights;
  watermelon: ColorWeights;
  rainbow: ColorWeights;
};

export type Margin = {
  margin: string;
};

export interface Typography {
  super1: TypographyStyles;
  super2: TypographyStyles;
  super3: TypographyStyles;
  h1: TypographyStyles;
  h2: TypographyStyles;
  h3: TypographyStyles;
  h4: TypographyStyles;
  h5: TypographyStyles;
  finePrint: TypographyStyles;
  body1: TypographyStyles;
  body2: TypographyStyles;
  body3: TypographyStyles;
  label1: TypographyStyles;
  label2: TypographyStyles;
  label3: TypographyStyles;
  label4: TypographyStyles;
  bodyFont: string;
  headerFont: string;
  body1Spacing: Margin;
  body2Spacing: Margin;
  body3Spacing: Margin;
}

export interface SurveyNavColors {
  link: string;
  activeLink: string;
  visitedLink: string;
}

export interface SpendCardColors {
  spendAmount: string;
  spendBar: string;
  border: string;
}

export interface HighlightsColors {
  border: string;
}

export interface CoverageSpendColors {
  spendCard: SpendCardColors;
  highlights: HighlightsColors;
}

export interface Links {
  default: string;
  hover: string;
  active: string;
  disabled: string;
}

export interface LogoLoaderColors {
  borderColor: string;
  spinnerColor: string;
}

export interface GenericColors {
  supportive: string;
}

export interface DynamicColors {
  surveyNav: SurveyNavColors;
  coverageSpend: CoverageSpendColors;
  generics: GenericColors;
  links: Links;
  logoLoader: LogoLoaderColors;
}
export interface Theme {
  id: ThemeName;
  typography: Typography;
  palette: Palette;
  buttons: Buttons;
  pill: Pill;
  link: Link;
  breakpoints: Breakpoints;
  dynamicColors: DynamicColors;
  config: ThemeConfig;
}

export enum ThemeName {
  ADP = 'adp',
  NAYYA = 'nayya',
  UPWISE = 'upwise',
}
