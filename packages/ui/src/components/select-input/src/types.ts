import { Theme } from '@nayya-com/wardrobe';
import { ReactNode } from 'react';
import type { GroupBase, Props, SelectInstance } from 'react-select';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export interface SelectInputProps<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> extends Props<Option, IsMulti, Group> {
  error?: boolean;
  helperText?: string;
  warning?: boolean;
  label: ReactNode;
  id: string;
  fullWidth?: boolean;
  visibleInput?: boolean;
  ref?: React.Ref<SelectInstance<Option, IsMulti, Group>>;
}

export type { SelectInstance };
