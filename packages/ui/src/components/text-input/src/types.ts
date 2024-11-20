import { Theme } from '@nayya-com/wardrobe';
import { AriaAttributes, ForwardedRef } from 'react';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export enum LabelLocation {
  ABOVE = 'above',
  CONTAINED = 'contained',
}

type ActionProps =
  | {
      action?: React.ReactElement;
      actionText?: string;
      onAction?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    }
  | {
      action?: React.ReactElement;
      actionText?: never;
      onAction?: never;
    };

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  fullWidth?: boolean;
  label?: string;
  helperText?: string;
  placeholder?: string;
  className?: string;
  error?: boolean;
  inputActionAriaAttributes?: AriaAttributes;
  warning?: boolean;
  disabled?: boolean;
  loading?: boolean;
  action?: React.ReactElement;
  actionText?: string;
  onAction?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  ref?: ForwardedRef<HTMLInputElement>;
}

export type TextInputPropsWithAction = TextInputProps & ActionProps;
