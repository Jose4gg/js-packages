import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Checkbox } from '../../../components';
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
    theme: 'upwise',
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const {
  default: defaultStory,
  bordered,
  defaultHovered,
  borderedWide,
  borderedAndHovered,
  disabledDefault,
  disabledDefaultChecked,
  disabledBordered,
  disabledBorderedChecked,
  disabledBorderedWide,
  disabledBorderedWideChecked,
  icon,
  iconHovered,
  iconDisabled,
  iconDisabledChecked,
} = checkboxConfigs;

export const Default: Story = defaultStory;

export const DefaultHovered: Story = defaultHovered;

export const DisabledDefault: Story = disabledDefault;

export const DisabledDefaultChecked: Story = disabledDefaultChecked;

export const Bordered: Story = bordered;

export const BorderedAndHovered: Story = borderedAndHovered;

export const DisabledBordered: Story = disabledBordered;

export const DisabledBorderedChecked: Story = disabledBorderedChecked;

export const BorderedWide: Story = borderedWide;

export const DisabledBorderedWide: Story = disabledBorderedWide;

export const DisabledBorderedWideChecked: Story = disabledBorderedWideChecked;

export const Icon: Story = icon;

export const IconHovered: Story = iconHovered;

export const IconDisabled: Story = iconDisabled;

export const IconDisabledChecked: Story = iconDisabledChecked;
