import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
import { describe, expect, test } from 'vitest';

import * as NumberInputStories from '@/stories/number-input/NumberInput.stories';
import * as AdpNumberInputStories from '@/stories/number-input/adp/NumberInput.stories';
import * as UpwiseNumberInputStories from '@/stories/number-input/upwise/NumberInput.stories';
import { testStoryLengths } from '@/tests/shared-test-cases';

expect.extend(matchers);

const {
  Base,
  WithHelperText,
  WithInitialValue,
  AllowLeadingZeros,
  AllowNegativeValues,
  AllowDecimalSeparators,
  AllowDecimalScale,
  AllowThousandSeparator,
  WithPrefix,
  WithSuffix,
  Error,
  ErrorWithHelperText,
  Warning,
  WarningWithHelperText,
  Disabled,
  DisabledWithHelperText,
  DisabledWithValue,
} = composeStories(NumberInputStories);

const defaultStoriesObj = composeStories(NumberInputStories);
const adpStoriesObj = composeStories(AdpNumberInputStories);
const upwiseStoriesObj = composeStories(UpwiseNumberInputStories);

testStoryLengths({ defaultStoriesObj, adpStoriesObj, upwiseStoriesObj });

const expectMap = {
  disabled: (element: HTMLElement) => expect(element).toBeDisabled(),
  warning: (element: HTMLElement) => expect(element).toHaveClass('warning'),
  error: (element: HTMLElement) => expect(element).toHaveClass('error'),
  default: (element: HTMLElement) => expect(element).toBeInTheDocument(),
};

const allStories = {
  default: [<Base />, <WithInitialValue />, <AllowNegativeValues />, <AllowLeadingZeros />],
  errors: [<Error />, <ErrorWithHelperText />],
  warnings: [<Warning />, <WarningWithHelperText />],
  disabled: [<Disabled />, <DisabledWithHelperText />, <DisabledWithValue />],
  withHelperText: [
    <WithHelperText />,
    <ErrorWithHelperText />,
    <WarningWithHelperText />,
    <DisabledWithHelperText />,
  ],
  withPrefixSuffix: [<WithPrefix />, <WithSuffix />],

  withSeparators: [<AllowDecimalSeparators />, <AllowDecimalScale />, <AllowThousandSeparator />],
};

describe('NumberInput renders', () => {
  Object.values(allStories).forEach((stories) => {
    stories.forEach((story) => {
      test(`Renders the ${story.type.storyName} properly`, () => {
        expect.assertions(1);

        render(story);
        const element = screen.getByRole('textbox', { name: 'Input Number' });
        expect(element).toBeInTheDocument();
      });
    });
  });
});

describe('Input Number renders with proper states', () => {
  describe('Error state', () => {
    allStories.errors.forEach((story) => {
      test(`${story.type.storyName} should have error class`, () => {
        expect.assertions(1);

        render(story);
        const element = screen.getByRole('textbox', { name: 'Input Number' });
        expectMap.error(element);
      });
    });
  });
  describe('Warning state', () => {
    allStories.warnings.forEach((story) => {
      test(`${story.type.storyName} should have warning class`, () => {
        expect.assertions(1);

        render(story);
        const element = screen.getByRole('textbox', { name: 'Input Number' });
        expectMap.warning(element);
      });
    });
  });
  describe('Disabled state', () => {
    allStories.disabled.forEach((story) => {
      test(`${story.type.storyName} should have warning class`, () => {
        expect.assertions(1);

        render(story);
        const element = screen.getByRole('textbox', { name: 'Input Number' });
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
  test('Negative value should render properly', () => {
    render(<AllowNegativeValues />);
    const element = screen.getByRole('textbox', { name: 'Input Number' });
    expect(element).toHaveValue('-123');
  });
  test('$ prefix should render properly', () => {
    render(<WithPrefix />);
    const element = screen.getByRole('textbox', { name: 'Input Number' });
    expect(element).toHaveValue('$123');
  });
  test('/month suffix should render properly', () => {
    render(<WithSuffix />);
    const element = screen.getByRole('textbox', { name: 'Input Number' });
    expect(element).toHaveValue('123/month');
  });

  test('Leading zeros should render properly', () => {
    render(<AllowLeadingZeros />);
    const element = screen.getByRole('textbox', { name: 'Input Number' });
    expect(element).toHaveValue('000123');
  });

  test('Decimal separators should render properly', () => {
    render(<AllowDecimalSeparators />);
    const element = screen.getByRole('textbox', { name: 'Input Number' });
    expect(element).toHaveValue('123.45');
  });

  test('Decimal scale should render properly', () => {
    render(<AllowDecimalScale />);
    const element = screen.getByRole('textbox', { name: 'Input Number' });
    expect(element).toHaveValue('123.100');
  });

  test('Thousand separator should render properly', () => {
    render(<AllowThousandSeparator />);
    const element = screen.getByRole('textbox', { name: 'Input Number' });
    expect(element).toHaveValue('1,234,567');
  });
});
