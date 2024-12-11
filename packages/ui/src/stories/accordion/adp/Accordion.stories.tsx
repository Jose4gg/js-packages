import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from '../../../components';
import { storyConfigs } from '../storyConfigs';

const meta: Meta = {
  component: Accordion,
  parameters: {
    theme: 'adp',
  },
};

export default meta;

export type Story = StoryObj<typeof Accordion>;

const { default: defaultStory, singleItem, allowMultipleOpens } = storyConfigs;

export const Default: Story = defaultStory;

export const SingleItem: Story = singleItem;

export const AllowMultipleOpens: Story = allowMultipleOpens;
