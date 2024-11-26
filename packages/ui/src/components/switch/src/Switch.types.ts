import 'styled-components';
import { Theme } from '@nayya-com/wardrobe';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export type Mode = 'light' | 'dark';

export interface SwitchProps {
  id?: string;
  name?: string;
  dark?: boolean;
  checked: boolean;
  onChange: (checked: boolean) => void;
}
