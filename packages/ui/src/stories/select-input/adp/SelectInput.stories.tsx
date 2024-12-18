import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { SelectInput } from '../../../components';
import { storyConfigs } from '../storyConfigs';

const meta: Meta<typeof SelectInput> = {
  component: SelectInput,
  parameters: {
    theme: 'adp',
  },
  decorators: [
    (Story: StoryFn) => (
      <div style={{ width: '22rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export type Story = StoryObj<typeof SelectInput>;

const {
  default: defaultStory,
  withHelperText,
  error,
  errorWithHelperText,
  warning,
  warningWithHelperText,
  disabled,
  disabledWithHelperText,
  multiSelect,
} = storyConfigs;

export const Default: Story = defaultStory;

export const WithHelperText: Story = withHelperText;

export const Error: Story = error;

export const ErrorWithHelperText: Story = errorWithHelperText;

export const Warning: Story = warning;

export const WarningWithHelperText: Story = warningWithHelperText;

export const Disabled: Story = disabled;

export const DisabledWithHelperText: Story = disabledWithHelperText;

export const MultiSelect: Story = multiSelect;
