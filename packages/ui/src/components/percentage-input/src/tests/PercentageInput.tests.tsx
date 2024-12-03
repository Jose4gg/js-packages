import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as PercentageInputStories from '@stories/percentage-input/PercentageInput.stories';
import * as AdpPercentageInputStories from '@stories/percentage-input/adp/PercentageInput.stories';
import * as UpwisePercentageInputStories from '@stories/percentage-input/upwise/PercentageInput.stories';
import { testStoryLengths } from '@tests/shared-test-cases';
import React from 'react';
import { describe, expect, test } from 'vitest';

const {
  Base,
  WithHelperText,
  WithInitialValue,
  AllowDecimalScale,
  Error,
  ErrorWithHelperText,
  Warning,
  WarningWithHelperText,
  Disabled,
  DisabledWithHelperText,
  DisabledWithValue,
} = composeStories(PercentageInputStories);

const defaultStoriesObj = composeStories(PercentageInputStories);
const adpStoriesObj = composeStories(AdpPercentageInputStories);
const upwiseStoriesObj = composeStories(UpwisePercentageInputStories);

testStoryLengths({ defaultStoriesObj, adpStoriesObj, upwiseStoriesObj });

const expectMap = {
  disabled: (element: HTMLElement) => expect(element).toBeDisabled(),
  warning: (element: HTMLElement) => expect(element).toHaveClass('warning'),
  error: (element: HTMLElement) => expect(element).toHaveClass('error'),
  default: (element: HTMLElement) => expect(element).toBeInTheDocument(),
};

const allStories = {
  default: [<Base />, <WithInitialValue />],
  errors: [<Error />, <ErrorWithHelperText />],
  warnings: [<Warning />, <WarningWithHelperText />],
  disabled: [<Disabled />, <DisabledWithHelperText />, <DisabledWithValue />],
  withHelperText: [
    <WithHelperText />,
    <ErrorWithHelperText />,
    <WarningWithHelperText />,
    <DisabledWithHelperText />,
  ],
  withSeparators: [<AllowDecimalScale />],
};

describe('PercentageInput renders', () => {
  Object.values(allStories).forEach((stories) => {
    stories.forEach((story) => {
      test(`Renders the ${story.type.storyName} properly`, () => {
        expect.assertions(1);

        render(story);
        const element = screen.getByRole('textbox', {
          name: 'Enter Percentage',
        });
        expect(element).toBeInTheDocument();
      });
    });
  });
});

describe('Enter Percentage renders with proper states', () => {
  describe('Error state', () => {
    allStories.errors.forEach((story) => {
      test(`${story.type.storyName} should have error class`, () => {
        expect.assertions(1);

        render(story);
        const element = screen.getByRole('textbox', {
          name: 'Enter Percentage',
        });
        expectMap.error(element);
      });
    });
  });
  describe('Warning state', () => {
    allStories.warnings.forEach((story) => {
      test(`${story.type.storyName} should have warning class`, () => {
        expect.assertions(1);

        render(story);
        const element = screen.getByRole('textbox', {
          name: 'Enter Percentage',
        });
        expectMap.warning(element);
      });
    });
  });
  describe('Disabled state', () => {
    allStories.disabled.forEach((story) => {
      test(`${story.type.storyName} should have warning class`, () => {
        expect.assertions(1);

        render(story);
        const element = screen.getByRole('textbox', {
          name: 'Enter Percentage',
        });
        expectMap.disabled(element);
      });
    });
  });
});

describe('Helper text renders', () => {
  allStories.withHelperText.forEach((story) => {
    test(`${story.type.storyName} should have helper text`, () => {
      expect.assertions(1);

      render(story);
      const element = screen.getByText('Helper Text');
      expect(element).toBeInTheDocument();
    });
  });
});

describe('Custom', () => {
  test('Decimal scale should render properly', () => {
    render(<AllowDecimalScale />);
    const element = screen.getByRole('textbox', { name: 'Enter Percentage' });
    expect(element).toHaveValue('85.10%');
  });
});
