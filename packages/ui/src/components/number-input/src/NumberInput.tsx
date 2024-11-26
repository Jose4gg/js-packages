import { ForwardedRef, forwardRef } from 'react';
import { NumericFormat } from 'react-number-format';
import TextInput from "@nayya-com/text-input";
import { TextInputProps } from '@nayya-com/text-input/lib/types';

import { NumberInputProps } from './NumberInput.types';

// TODO: this is to explicitly maintain strict typing with customInput
// It's better than casting, but still not ideal
const TextInputWrapper: React.FC<TextInputProps> = (props) => {
  return <TextInput {...props} />;
};

const NumberInput = forwardRef(
  (props: NumberInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { name, id, label, ...rest } = props;

    return (
      <NumericFormat<TextInputProps>
        {...rest}
        getInputRef={ref}
        id={id}
        data-analytics-id={id}
        data-testid={id}
        label={label}
        name={name}
        customInput={TextInputWrapper}
      />
    );
  },
);

export default NumberInput;
