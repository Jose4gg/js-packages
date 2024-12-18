import type { Meta, StoryObj } from '@storybook/react';

import HTMLShowcase from '../../components/resetcss/src/HTMLShowcase';

import { storyConfigs } from './storyConfigs';

const meta: Meta = {
  component: HTMLShowcase,
};

export default meta;

export type Story = StoryObj<typeof HTMLShowcase>;

const { default: defaultStory, withoutReset } = storyConfigs;

export const Default: Story = defaultStory;
export const WithoutReset: Story = withoutReset;
