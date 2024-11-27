import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import selectEvent from 'react-select-event';

import * as SelectInputStories from '@stories/select-input/SelectInput.stories';
import * as AdpSelectInputStories from '@stories/select-input/adp/SelectInput.stories';
import * as UpwiseSelectInputStories from '@stories/select-input/upwise/SelectInput.stories';
import { testStoryLengths } from '@tests/shared-test-cases';

import { describe, expect, test } from 'vitest';

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
} = composeStories(SelectInputStories);

const defaultStoriesObj = composeStories(SelectInputStories);
const adpStoriesObj = composeStories(AdpSelectInputStories);
const upwiseStoriesObj = composeStories(UpwiseSelectInputStories);

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

testStoryLengths({ defaultStoriesObj, adpStoriesObj, upwiseStoriesObj });

describe('The select input renders', () => {
  allStories.forEach((story) => {
    test(`Renders the ${story.type.storyName} select properly`, () => {
      expect.assertions(1);

      render(story);
      const selectElement = screen.getByLabelText('Select a fruit');

      expect(selectElement).toBeInTheDocument();
    });
  });

  test(`The select input renders helper text`, () => {
    expect.assertions(1);

    render(<WithHelperText />);
    const helperText = screen.getByText('Helper Text');

    expect(helperText).toBeInTheDocument();
  });

  test(`The value is assigned as expected`, async () => {
    render(<WithHelperText />);
    const input = screen.getByLabelText('Select a fruit');

    await selectEvent.select(input, 'Apple');

    const appleText = await screen.findByText('Apple', {});
    expect(appleText).toBeInTheDocument();
  });

  test(`Multiple values are assigned as expected`, async () => {
    render(<MultiSelect />);
    const input = screen.getByLabelText('Select a fruit');

    await selectEvent.select(input, 'Apple');
    await selectEvent.select(input, 'Banana');

    const updatedInput = await screen.findByText('Banana');

    expect(updatedInput).toBeInTheDocument();
  });
});
