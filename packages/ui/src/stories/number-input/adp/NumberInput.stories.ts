import type { Meta, StoryObj } from '@storybook/react';

import { NumberInput } from '../../../components';
import { storyConfigs } from '../storyConfigs';

const meta: Meta<typeof NumberInput> = {
  component: NumberInput,
  parameters: {
    theme: 'adp',
  },
};
export default meta;

export type Story = StoryObj<typeof NumberInput>;

const {
  base,
  withHelperText,
  withInitialValue,
  allowLeadingZeros,
  allowNegativeValues,
  allowDecimalSeparators,
  allowDecimalScale,
  allowThousandSeparator,
  withPrefix,
  withSuffix,
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
export const AllowLeadingZeros: Story = allowLeadingZeros;
export const AllowNegativeValues: Story = allowNegativeValues;
export const AllowDecimalSeparators: Story = allowDecimalSeparators;
export const AllowDecimalScale: Story = allowDecimalScale;
export const AllowThousandSeparator: Story = allowThousandSeparator;
export const WithPrefix: Story = withPrefix;
export const WithSuffix: Story = withSuffix;
export const Error: Story = error;
export const ErrorWithHelperText: Story = errorWithHelperText;
export const Warning: Story = warning;
export const WarningWithHelperText: Story = warningWithHelperText;
export const Disabled: Story = disabled;
export const DisabledWithValue: Story = disabledWidthValue;
export const DisabledWithHelperText: Story = disabledWithHelperText;
