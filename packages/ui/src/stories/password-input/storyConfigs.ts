import { StoryObj } from '@storybook/react';
import PasswordInput from '../../components/password-input';

enum StoryConfigs {
  password = 'password',
  disabled = 'disabled',
  error = 'error',
  warning = 'warning',
  loading = 'loading',
  withHelperText = 'withHelperText',
}

const defaultArgs = {
  id: 'storybookDemo',
  type: 'password',
};

export const storyConfigs: Record<
  StoryConfigs,
  StoryObj<typeof PasswordInput>
> = {
  password: {
    args: {
      ...defaultArgs,
    },
  },
  disabled: {
    args: {
      ...defaultArgs,
      disabled: true,
    },
  },
  error: {
    args: {
      ...defaultArgs,
      error: true,
    },
  },
  warning: {
    args: {
      ...defaultArgs,
      warning: true,
    },
  },
  loading: {
    args: {
      ...defaultArgs,
      loading: true,
    },
  },
  withHelperText: {
    args: {
      ...defaultArgs,
      helperText: 'This is helper text',
    },
  },
};
