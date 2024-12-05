import { Theme } from '@nayya-com/wardrobe';
import { Props, SelectInstance } from 'react-select';
import 'styled-components';

export type StyledAutocompleteProps = AutocompleteProps & {
  loading: boolean;
};

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export interface AutocompleteProps extends Props {
  searchFn: (inputValue: string) => Promise<unknown[]>;
  error?: boolean;
  helperText?: string;
  testId?: string;
  warning?: boolean;
  inputActionLabel?: string;
  inputActionHandler?: () => void;
  Input?: () => void;
  header?: string;
  ref?: React.Ref<SelectInstance>;
}

export type { SelectInstance as AutocompleteInstance };
