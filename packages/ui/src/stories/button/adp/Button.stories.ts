import type { Meta, StoryObj } from '@storybook/react';

import Button from '../../../components/button';
import { storyConfigs } from '../storyConfigs';

const meta: Meta = {
  component: Button,
  parameters: {
    theme: 'adp',
  },
};

const {
  default: storyDefault,
  defaultDark,
  defaultLoading,
  defaultMini,
  defaultFullWidth,
  defaultDisabled,
} = storyConfigs;
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = storyDefault;

export const DefaultDark: Story = defaultDark;

export const DefaultLoading: Story = defaultLoading;

export const DefaultMini: Story = defaultMini;

export const DefaultFullWidth: Story = defaultFullWidth;

export const DefaultDisabled: Story = defaultDisabled;
