import { NumericFormat } from 'react-number-format';
import TextInput from '@nayya-com/text-input';
import { TextInputProps } from '@nayya-com/text-input/lib/types';

import { PercentageInputProps } from './PercentageInput.types';

// TODO: this is to explicitly maintain strict typing with customInput
// It's better than casting, but still not ideal
const TextInputWrapper: React.FC<TextInputProps> = (props) => {
  return <TextInput {...props} />;
};

const PercentageInput = (props: PercentageInputProps) => {
  const {
    name,
    id,
    label,
    min = 1,
    max = 100,
    decimalScale = 2,
    ...rest
  } = props;

  return (
    <NumericFormat<TextInputProps>
      {...rest}
      id={id}
      suffix="%"
      data-analytics-id={id}
      data-testid={id}
      allowedDecimalSeparators={['.']}
      label={label}
      name={name}
      customInput={TextInputWrapper}
      min={min}
      max={max}
      allowNegative={false}
      decimalScale={decimalScale}
      allowLeadingZeros={false}
    />
  );
};

export default PercentageInput;
