import { Theme } from '@nayya-com/wardrobe';
import { ReactNode } from 'react';
import type { Props, SelectInstance } from 'react-select';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export interface SelectInputProps extends Props {
  error?: boolean;
  helperText?: string;
  warning?: boolean;
  label: ReactNode;
  id: string;
  fullWidth?: boolean;
  visibleInput?: boolean;
  ref?: React.Ref<SelectInstance>;
}

export type { SelectInstance };
