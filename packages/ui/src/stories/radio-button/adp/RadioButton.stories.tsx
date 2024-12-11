import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { RadioButton } from '../../../components';
import { radioButtonConfigs } from '../radioButtonConfigs';

const meta: Meta<typeof RadioButton> = {
  component: RadioButton,
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
type Story = StoryObj<typeof RadioButton>;

const {
  default: defaultStory,
  defaultHovered,
  defaultChecked,
  noBorder,
  noBorderHovered,
  noBorderChecked,
  disabledDefault,
  disabledDefaultChecked,
  icon,
  iconHovered,
  iconChecked,
  iconDisabled,
  iconDisabledChecked,
} = radioButtonConfigs;

export const Default: Story = defaultStory;

export const DefaultHovered: Story = defaultHovered;

export const DefaultChecked: Story = defaultChecked;

export const NoBorder: Story = noBorder;

export const NoBorderHovered: Story = noBorderHovered;

export const NoBorderChecked: Story = noBorderChecked;

export const DisabledDefault: Story = disabledDefault;

export const DisabledDefaultChecked: Story = disabledDefaultChecked;

export const Icon: Story = icon;

export const IconHovered: Story = iconHovered;

export const IconChecked: Story = iconChecked;

export const IconDisabled: Story = iconDisabled;

export const IconDisabledChecked: Story = iconDisabledChecked;
