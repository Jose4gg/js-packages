import { Theme } from '@nayya-com/wardrobe';
import React, { ForwardedRef } from 'react';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export interface LabelProps {
  disabled?: boolean;
  $fullWidth?: boolean;
}

export type RadioVariant = 'borderedWide' | 'default' | 'icon';

export interface RadioButtonProps {
  id: string;
  analyticsId?: string;
  checked?: boolean;
  bordered?: boolean;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: JSX.Element;
  name: string;
  label: string;
  labelContent?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  variant?: RadioVariant;
}

export type ListOrientation =
  | 'auto-grid'
  | 'default'
  | 'horizontal'
  | 'vertical';

export interface RadioButtonGroupProps {
  options: RadioButtonProps[];
  bordered?: boolean;
  defaultValue?: string;
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  orientation?: ListOrientation;
  ref?: ForwardedRef<HTMLFieldSetElement>;
}
