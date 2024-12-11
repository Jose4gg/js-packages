import type { Meta, StoryObj } from '@storybook/react';

import { PercentageInput } from '../../../components';
import { storyConfigs } from '../storyConfigs';

const meta: Meta<typeof PercentageInput> = {
  component: PercentageInput,
  parameters: {
    theme: 'upwise',
  },
};
export default meta;

export type Story = StoryObj<typeof PercentageInput>;

const {
  base,
  withHelperText,
  withInitialValue,
  allowDecimalScale,
  error,
  errorWithHelperText,
  warning,
  warningWithHelperText,
  disabled,
  disabledWithHelperText,
  disabledWidthValue,
} = storyConfigs;

export const Base: Story = base;
export const WithHelperText: Story = withHelperText;
export const WithInitialValue: Story = withInitialValue;
export const AllowDecimalScale: Story = allowDecimalScale;
export const Error: Story = error;
export const ErrorWithHelperText: Story = errorWithHelperText;
export const Warning: Story = warning;
export const WarningWithHelperText: Story = warningWithHelperText;
export const Disabled: Story = disabled;
export const DisabledWithValue: Story = disabledWidthValue;
export const DisabledWithHelperText: Story = disabledWithHelperText;
