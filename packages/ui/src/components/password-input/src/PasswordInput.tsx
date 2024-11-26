import { useState } from 'react';
import TextInput from '@nayya-com/text-input';

import { EyeballHide, EyeballShow } from './svg';
import { PasswordInputProps } from './types';

const PasswordInput = (
  props: Omit<PasswordInputProps, 'action' | 'actionText' | 'onAction'>,
) => {
  const { id, label, name } = props;
  const [showPassword, setShowPassword] = useState(false);
  const action = showPassword ? <EyeballHide /> : <EyeballShow />;

  return (
    <TextInput
      {...props}
      id={id}
      name={name}
      label={label || 'Enter Password'}
      type={showPassword ? 'text' : 'password'}
      onAction={() => setShowPassword((prevShowPassword) => !prevShowPassword)}
      action={action}
    />
  );
};

export default PasswordInput;
