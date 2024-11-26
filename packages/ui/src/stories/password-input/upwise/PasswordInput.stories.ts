import type { Meta, StoryObj } from '@storybook/react';
import PasswordInput from '../../../components/password-input';

import { storyConfigs } from '../storyConfigs';

const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
  parameters: {
    theme: 'upwise',
  },
};

export default meta;

export type Story = StoryObj<typeof PasswordInput>;

const { password, disabled, error, loading, warning, withHelperText } =
  storyConfigs;

export const Password: Story = password;

export const Disabled: Story = disabled;

export const Error: Story = error;

export const Warning: Story = warning;

export const Loading: Story = loading;

export const WithHelperText: Story = withHelperText;
