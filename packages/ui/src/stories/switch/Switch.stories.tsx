import type { Meta, StoryObj } from '@storybook/react';
import Switch from '../../components/switch';

const meta: Meta<typeof Switch> = {
  component: Switch,
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Checked: Story = {
  args: {
    id: 'switch',
    name: 'switch',
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    id: 'switch',
    name: 'switch',
    checked: false,
  },
};

export const CheckedDark: Story = {
  args: {
    id: 'switch',
    name: 'switch',
    checked: true,
    dark: true,
  },
};

export const UncheckedDark: Story = {
  args: {
    id: 'switch',
    name: 'switch',
    checked: false,
    dark: true,
  },
};
