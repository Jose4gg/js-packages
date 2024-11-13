import 'styled-components';
import { Theme } from '@nayya-com/wardrobe';
import { ButtonHTMLAttributes } from 'react';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'outlined' | 'text' | 'link' | 'marketing';
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  dark?: boolean;
};

type DefaultButtonProps = BaseButtonProps & {
  mini?: false;
  fullWidth?: false;
};

type MiniButtonProps = BaseButtonProps & {
  mini: true;
  fullWidth?: never;
};

type FullWidthButtonProps = BaseButtonProps & {
  fullWidth: true;
  mini?: never;
};

export type ButtonProps = DefaultButtonProps | MiniButtonProps | FullWidthButtonProps;

export type StyledButtonProps = {
  $mode: 'light' | 'dark';
  $mini: boolean;
  $fullWidth: boolean;
};
