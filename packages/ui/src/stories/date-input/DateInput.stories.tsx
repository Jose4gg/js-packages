import type { Meta, StoryObj } from '@storybook/react';
import { fireEvent } from '@storybook/testing-library';
import DateInput from '@components/date-input';

const meta: Meta<typeof DateInput> = {
  component: DateInput,
};
export default meta;

export type Story = StoryObj<typeof DateInput>;

export const Default: Story = {
  args: {
    label: 'Date',
    id: 'default',
  },
};

export const Focused: Story = {
  args: {
    label: 'Date',
    id: 'focused',
  },
};

Focused.play = async ({ args }) => {
  const { id } = args;
  const input = document.getElementById(id) as HTMLInputElement;
  input.focus();
};

export const DateEntered: Story = {
  args: {
    label: 'Date',
    id: 'dateEntered',
  },
};

DateEntered.play = async ({ args }) => {
  const { id } = args;
  const input = document.getElementById(id) as HTMLInputElement;
  if (input) {
    const characters = '12252023';

    for (const char of characters) {
      fireEvent.input(input, { target: { value: input.value + char } });

      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }
};
