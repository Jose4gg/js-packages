import { getRootWebUiTheme } from '@nayya-com/wardrobe';
import { ForwardedRef, forwardRef } from 'react';
import { ThemeProvider } from 'styled-components';
import TextInput from '@nayya-com/text-input';

import { DateInputProps } from './types';

const DateInput = forwardRef(
  (
    { onChange, ...rest }: DateInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const rootWebUiTheme = getRootWebUiTheme();

    const formatDateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      const input = event.target;
      let value = input.value.replace(/\D/g, '');

      // Format the value as MM/DD/YYYY
      if (value.length >= 5) {
        value = `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(
          4,
          8,
        )}`;
      } else if (value.length >= 3) {
        value = `${value.slice(0, 2)}/${value.slice(2)}`;
      } else if (value.length >= 1) {
        value = value.slice(0, 2);
      }

      input.value = value;
      if (onChange) {
        onChange(event);
      }
    };

    return (
      <ThemeProvider theme={rootWebUiTheme}>
        <TextInput
          {...rest}
          ref={ref}
          placeholder="MM/DD/YYYY"
          onChange={formatDateInput}
        />
      </ThemeProvider>
    );
  },
);

export default DateInput;
