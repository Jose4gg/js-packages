import { composeStories } from '@storybook/react';
import { fireEvent, render, screen } from '@testing-library/react';
import * as CheckboxStories from '@stories/checkbox/Checkbox.stories';
import { describe, expect, test } from 'vitest';

const {
  Default,
  DisabledDefault,
  DisabledDefaultChecked,
  Bordered,
  DisabledBordered,
  BorderedWide,
  DisabledBorderedWide,
  DisabledBorderedChecked,
  DisabledBorderedWideChecked,
  Icon,
  IconDisabled,
  IconDisabledChecked,
} = composeStories(CheckboxStories);

const allStories = [
  <Default />,
  <DisabledDefault />,
  <DisabledDefaultChecked />,
  <Bordered />,
  <DisabledBordered />,
  <BorderedWide />,
  <DisabledBorderedWide />,
  <DisabledBorderedChecked />,
  <DisabledBorderedWideChecked />,
  <Icon />,
  <IconDisabled />,
  <IconDisabledChecked />,
];

describe('The checkbox input renders', () => {
  allStories.forEach((story) => {
    test(`Renders the ${story.type.storyName} checkbox properly`, () => {
      expect.assertions(1);

      render(story);
      const checkboxElement = screen.getByTestId('checkbox-storybook-demo');

      expect(checkboxElement).toBeInTheDocument();
    });
  });

  test('The checkbox input renders the label', () => {
    expect.assertions(1);

    render(<Default />);
    const labelText = screen.getByText('Label');

    expect(labelText).toBeInTheDocument();
  });

  test('The checkbox is checked successfully', async () => {
    expect.assertions(1);

    render(<Default />);

    const checkboxElement = screen.getByTestId('checkbox-storybook-demo');

    await fireEvent.click(checkboxElement);

    expect(checkboxElement).toBeChecked();
  });
});
