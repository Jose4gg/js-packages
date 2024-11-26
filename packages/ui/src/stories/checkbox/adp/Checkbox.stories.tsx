import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Checkbox } from '../../../components/checkbox';

import { checkboxConfigs } from '../checkboxConfigs';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  decorators: [
    (Story: StoryFn) => (
      <div style={{ padding: '1rem', width: 'max-content' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    theme: 'adp',
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const {
  default: defaultStory,
  defaultHovered,
  disabledDefault,
  disabledDefaultChecked,
  icon,
  iconHovered,
  iconDisabled,
  iconDisabledChecked,
} = checkboxConfigs;

export const Default: Story = defaultStory;

export const DefaultHovered: Story = defaultHovered;

export const DisabledDefault: Story = disabledDefault;

export const DisabledDefaultChecked: Story = disabledDefaultChecked;

export const Icon: Story = icon;

export const IconHovered: Story = iconHovered;

export const IconDisabled: Story = iconDisabled;

export const IconDisabledChecked: Story = iconDisabledChecked;
