import type { StoryObj } from '@storybook/react';

import HTMLShowcase from '../../components/resetcss/src/HTMLShowcase';

export const storyConfigs: Record<string, StoryObj<typeof HTMLShowcase>> = {
  default: {
    args: {
      disableReset: false,
      testId: 'html-showcase-default',
    },
  },
  withoutReset: {
    args: {
      disableReset: true,
      testId: 'html-showcase-without-reset',
    },
  },
};
