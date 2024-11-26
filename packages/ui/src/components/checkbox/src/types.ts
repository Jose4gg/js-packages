import { Theme } from '@nayya-com/wardrobe';
import { ForwardedRef } from 'react';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export type CheckboxVariant = 'bordered' | 'borderedWide' | 'default' | 'icon';

export type CheckBoxLabelAlignment =
  | 'center'
  | 'left'
  | 'right'
  | 'initial'
  | 'justify';

export interface CheckboxProps {
  id: string;
  label: string;
  name: string;
  centerItems?: boolean;
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  analyticsId?: string;
  hasBorder?: boolean;
  icon?: JSX.Element;
  labelElement?: JSX.Element;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  variant?: CheckboxVariant;
  labelAlignment?: CheckBoxLabelAlignment;
}

export type ListOrientation =
  | 'auto-grid'
  | 'default'
  | 'horizontal'
  | 'vertical';

export interface CheckboxGroupProps {
  name: string;
  options: CheckboxProps[];
  bordered?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  helperText?: string;
  label?: string;
  orientation?: ListOrientation;
  checkedOptions?: CheckboxProps[];
  defaultCheckedOptions?: CheckboxProps[];
  onChange(newValues: CheckboxProps[]): void;
  ref?: ForwardedRef<HTMLFieldSetElement>;
}
