import { composeStories } from '@storybook/react';
import { fireEvent, render, screen } from '@testing-library/react';
import * as DateInputStories from '@stories/date-input/DateInput.stories';
import { describe, expect, it } from 'vitest';

const { Default } = composeStories(DateInputStories);

describe('DateInput', () => {
  it('renders the date input', () => {
    render(<Default />);
    expect(screen.getByTestId('default')).toBeInTheDocument();
  });

  it('properly formats the date as you type', async () => {
    render(<Default />);
    const input = screen.getByTestId('default') as HTMLInputElement;
    const characters = '12252023';

     
    for (const char of characters) {
      fireEvent.input(input, { target: { value: input.value + char } });
       
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    expect(input.value).toBe('12/25/2023');
  });
});
