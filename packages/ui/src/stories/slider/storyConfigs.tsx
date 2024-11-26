import { StoryObj } from '@storybook/react';
import Slider from '../../components/slider';

export const storyConfigs: Record<string, StoryObj<typeof Slider>> = {
  Primary: {
    args: {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      style: { width: '50%' },
      id: 'slider',
      ariaLabel: 'horizontal slider',
    },
  },
  Vertical: {
    args: {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      style: { height: '18.75rem', width: '4.5rem' },
      id: 'slider',
      orientation: 'vertical',
      ariaLabel: 'vertical slider',
    },
  },
};
