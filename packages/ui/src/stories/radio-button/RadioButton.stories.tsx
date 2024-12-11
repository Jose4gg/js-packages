import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { RadioButton } from '../../components';

import { radioButtonConfigs } from './radioButtonConfigs';

const meta: Meta<typeof RadioButton> = {
  component: RadioButton,
  decorators: [
    (Story: StoryFn) => (
      <div style={{ padding: '1rem', width: 'max-content' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

const {
  default: defaultStory,
  defaultHovered,
  defaultWithLabelContent,
  defaultWithLabelContentHovered,
  defaultChecked,
  defaultCheckedWithLabelContent,
  noBorder,
  noBorderHovered,
  noBorderChecked,
  borderedWide,
  borderedWideHovered,
  borderedWideChecked,
  disabledDefault,
  disabledDefaultWithLabelContent,
  disabledDefaultChecked,
  disabledDefaultCheckedWithLabelContent,
  disabledBorderedWide,
  disabledBorderedWideChecked,
  icon,
  iconHovered,
  iconChecked,
  iconDisabled,
  iconDisabledChecked,
} = radioButtonConfigs;

export const Default: Story = defaultStory;

export const DefaultHovered: Story = defaultHovered;

export const DefaultChecked: Story = defaultChecked;

export const DefaultWithLabelContent: Story = defaultWithLabelContent;

export const DefaultWithLabelContentHovered: Story = defaultWithLabelContentHovered;

export const DefaultCheckedWithLabelContent: Story = defaultCheckedWithLabelContent;

export const NoBorder: Story = noBorder;

export const NoBorderHovered: Story = noBorderHovered;

export const NoBorderChecked: Story = noBorderChecked;

export const DisabledDefault: Story = disabledDefault;

export const DisabledDefaultWithLabelContent: Story = disabledDefaultWithLabelContent;

export const DisabledDefaultChecked: Story = disabledDefaultChecked;

export const DisabledDefaultCheckedWithLabelContent: Story = disabledDefaultCheckedWithLabelContent;

export const BorderedWide: Story = borderedWide;

export const BorderedWideHovered: Story = borderedWideHovered;

export const BorderedWideChecked: Story = borderedWideChecked;

export const DisabledBorderedWide: Story = disabledBorderedWide;

export const DisabledBorderedWideChecked: Story = disabledBorderedWideChecked;

export const Icon: Story = icon;

export const IconHovered: Story = iconHovered;

export const IconChecked: Story = iconChecked;

export const IconDisabled: Story = iconDisabled;

export const IconDisabledChecked: Story = iconDisabledChecked;
