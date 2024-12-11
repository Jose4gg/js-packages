import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from '../../../components';
import { storyConfigs } from '../storyConfigs';

const meta: Meta<typeof Slider> = {
  component: Slider,
  parameters: {
    theme: 'adp',
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

const { Primary, Vertical }: Record<string, Story> = storyConfigs;

export { Primary, Vertical };
