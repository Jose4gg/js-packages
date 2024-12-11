import type { Meta, StoryObj } from '@storybook/react';

import { Pill } from '../../../components';
import { storyConfigs } from '../storyConfigs';

const meta: Meta<typeof Pill> = {
  component: Pill,
  parameters: {
    theme: 'adp',
  },
};

export default meta;
type Story = StoryObj<typeof Pill>;

const {
  default: defaultStory,
  recommended,
  recommendedWithNoText,
  recommendedBorderless,
  recommendedBorderlessWithNoText,
  recommendedBordered,
  recommendedBorderedWithNoText,
  planHighlights,
  waived,
  waivedWithNoText,
} = storyConfigs;

export const Default: Story = defaultStory;

export const Recommended: Story = recommended;

export const RecommendedWithNoText: Story = recommendedWithNoText;

export const RecommendedBorderless: Story = recommendedBorderless;

export const RecommendedBorderlessWithNoText: Story = recommendedBorderlessWithNoText;

export const RecommendedBordered: Story = recommendedBordered;

export const RecommendedBorderedWithNoText: Story = recommendedBorderedWithNoText;

export const PlanHighlights: Story = planHighlights;

export const Waived: Story = waived;

export const WaivedWithNoText: Story = waivedWithNoText;
