import { Theme } from '@nayya-com/wardrobe';
import { GroupBase, Props, SelectInstance } from 'react-select';
import 'styled-components';

export type StyledAutocompleteProps = AutocompleteProps & {
  loading: boolean;
};

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export interface AutocompleteProps<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> extends Props<Option, IsMulti, Group> {
  searchFn: (inputValue: string) => Promise<Option[]>;
  error?: boolean;
  helperText?: string;
  testId?: string;
  warning?: boolean;
  inputActionLabel?: string;
  inputActionHandler?: () => void;
  Input?: () => void;
  header?: string;
  ref?: React.Ref<SelectInstance<Option, IsMulti, Group>>;
}

export type { SelectInstance as AutocompleteInstance };
