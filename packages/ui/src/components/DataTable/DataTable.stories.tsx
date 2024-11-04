import type { Meta, StoryObj } from '@storybook/react';

import { DataTable } from './DataTable';

const meta: Meta<typeof DataTable> = {
  component: DataTable,
  title: 'Components/DataTable',
};

export default meta;

type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
