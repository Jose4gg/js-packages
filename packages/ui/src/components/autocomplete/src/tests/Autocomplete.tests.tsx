import { composeStories } from '@storybook/react';
import { expect, waitFor } from '@storybook/test';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as AutocompleteStories from '@stories/autocomplete/Autocomplete.stories';
import * as AdpAutocompleteStories from '@stories/autocomplete/adp/Autocomplete.stories';
import * as UpwiseAutocompleteStories from '@stories/autocomplete/upwise/Autocomplete.stories';
import { testStoryLengths } from '@tests/shared-test-cases';
import { describe, test } from 'vitest';

const {
  Default,
  WithHelperText,
  Error,
  ErrorWithHelperText,
  Warning,
  WarningWithHelperText,
  Disabled,
  DisabledWithHelperText,
  MultiSelect,
} = composeStories(AutocompleteStories);

const defaultStoriesObj = composeStories(AutocompleteStories);
const adpStoriesObj = composeStories(AdpAutocompleteStories);
const upwiseStoriesObj = composeStories(UpwiseAutocompleteStories);

const allStories = [
  <Default />,
  <WithHelperText />,
  <Error />,
  <ErrorWithHelperText />,
  <Warning />,
  <WarningWithHelperText />,
  <Disabled />,
  <DisabledWithHelperText />,
  <MultiSelect />,
];

const keyDownEvent = {
  key: 'ArrowDown',
};

testStoryLengths({ defaultStoriesObj, adpStoriesObj, upwiseStoriesObj });

describe('The Autocomplete input renders', () => {
  allStories.forEach((story) => {
    test(`Renders the ${story.type.storyName} select properly`, () => {
      expect.assertions(1);

      render(story);
      const selectElement = screen.getByTestId('autocomplete-test-id');

      expect(selectElement).toBeInTheDocument();
    });
  });

  test(`The autocomplete input renders helper text`, () => {
    expect.assertions(1);

    render(<WithHelperText />);
    const helperText = screen.getByText('Helper Text');

    expect(helperText).toBeInTheDocument();
  });

  test(`The value is assigned as expected`, async () => {
    render(<WithHelperText />);
    const input = screen.getByText('Search a fruit');

    fireEvent.keyDown(input, keyDownEvent);
    await userEvent.type(input, 'app');

    await waitFor(() => expect(screen.getByText('Apple')).toBeInTheDocument());

    fireEvent.click(screen.getByText('Apple'));
    const updatedInput = await screen.findByText('Apple');

    expect(updatedInput).toBeInTheDocument();
  });

  test(`Multiple values are assigned as expected`, async () => {
    render(<MultiSelect />);
    const input = screen.getByText('Search a fruit');

    fireEvent.keyDown(input, keyDownEvent);

    await userEvent.type(input, 'app');
    await screen.findByText('Apple');
    fireEvent.click(screen.getByText('Apple'));

    fireEvent.keyDown(input, keyDownEvent);
    await userEvent.type(input, 'ban');
    await screen.findByText('Banana');
    fireEvent.click(screen.getByText('Banana'));

    const appleText = await screen.findByText('Apple');
    const bananaText = await screen.findByText('Banana');

    expect(appleText).toBeInTheDocument();
    expect(bananaText).toBeInTheDocument();
  });
});
