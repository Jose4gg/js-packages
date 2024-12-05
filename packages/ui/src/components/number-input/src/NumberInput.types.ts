import { ForwardedRef } from 'react';
import type { NumberFormatValues, NumericFormatProps } from 'react-number-format';
import { TextInputProps } from '@nayya-com/text-input/lib/types';

export interface NumberInputProps extends NumericFormatProps<TextInputProps> {
  ref?: ForwardedRef<HTMLInputElement>;
}
export type { NumberFormatValues };
