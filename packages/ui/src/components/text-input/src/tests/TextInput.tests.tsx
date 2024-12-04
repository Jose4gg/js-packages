import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { ReactElement } from 'react';
import * as TextInputStories from '@stories/text-input/TextInput.stories';
import * as AdpTextInputStories from '@stories/text-input/adp/TextInput.stories';
import * as UpwiseTextInputStories from '@stories/text-input/upwise/TextInput.stories';
import { testStoryLengths } from '@tests/shared-test-cases';
import { describe, expect, test } from 'vitest';

const {
  Base,
  WithPlaceholder,
  WithHelperText,
  WithAction,
  WithHelperTextAndAction,
  WithPlaceholderAndHelperText,
  WithPlaceholderAndAction,
  WithPlaceholderAndHelperTextAndAction,
  Disabled,
  DisabledWithPlaceholder,
  DisabledWithHelperText,
  DisabledWithAction,
  DisabledWithHelperTextAndAction,
  DisabledWithPlaceholderAndHelperText,
  DisabledWithPlaceholderAndAction,
  DisabledWithPlaceholderAndHelperTextAndAction,
  Error,
  ErrorWithPlaceholder,
  ErrorWithHelperText,
  ErrorWithAction,
  ErrorWithHelperTextAndAction,
  ErrorWithPlaceholderAndHelperText,
  ErrorWithPlaceholderAndAction,
  ErrorWithPlaceholderAndHelperTextAndAction,
  Warning,
  WarningWithPlaceholder,
  WarningWithHelperText,
  WarningWithAction,
  WarningWithHelperTextAndAction,
  WarningWithPlaceholderAndHelperText,
  WarningWithPlaceholderAndAction,
  WarningWithPlaceholderAndHelperTextAndAction,
} = composeStories(TextInputStories);

const defaultStoriesObj = composeStories(TextInputStories);
const adpStoriesObj = composeStories(AdpTextInputStories);
const upwiseStoriesObj = composeStories(UpwiseTextInputStories);

testStoryLengths({ defaultStoriesObj, adpStoriesObj, upwiseStoriesObj });

type States = 'disabled' | 'warning' | 'error' | 'default';
interface StoryWithState {
  composedStory: ReactElement;
  state: States;
}

const expectMap = {
  disabled: (element: HTMLElement) => expect(element).toBeDisabled(),
  disabledLabel: (element: HTMLElement) =>
    expect(element).toHaveClass('disabled'),
  warning: (element: HTMLElement) => expect(element).toHaveClass('warning'),
  error: (element: HTMLElement) => expect(element).toHaveClass('error'),
  default: (element: HTMLElement) => expect(element).toBeInTheDocument(),
};

const runInputTests = (tests: StoryWithState[]) => {
  const inputTests = (
    composedStory: ReactElement,
    state: States = 'default',
  ) => {
    const RENDER_COMPONENT = `Renders the component`;
    const RENDER_COMPONENT_WITH_STATE = `Renders the component when it is in a ${state} state`;

    const componentTestString =
      state === 'default' ? RENDER_COMPONENT : RENDER_COMPONENT_WITH_STATE;

    test(`${componentTestString}`, () => {
      expect.assertions(1);

      render(composedStory);
      const inputElement = screen.getByTestId('storybookDemo');
      const expectFunction = expectMap[state] || expectMap.default;

      expectFunction(inputElement);
    });
  };
  tests.forEach((test) => inputTests(test.composedStory, test.state));
};

const runLabelTests = (tests: StoryWithState[]) => {
  const labelTest = (composedStory: ReactElement, state: States) => {
    const RENDER_COMPONENT_WITH_LABEL = `Renders the label`;
    const RENDER_COMPONENT_WITH_LABEL_AND_STATE = `Renders the label when component is in a ${state} state`;
    const testString =
      state === 'default'
        ? RENDER_COMPONENT_WITH_LABEL
        : RENDER_COMPONENT_WITH_LABEL_AND_STATE;

    test(`${testString}`, () => {
      expect.assertions(1);
      render(composedStory);
      const labelElement = screen.getByText('First Name');
      const expectFunction =
        state === 'disabled' ? expectMap.disabledLabel : expectMap.default;

      expectFunction(labelElement);
    });
  };

  tests.forEach((test) => labelTest(test.composedStory, test.state));
};

const runPlaceholderTests = (tests: StoryWithState[]) => {
  const placeholderTest = (composedStory: ReactElement, state: States) => {
    const RENDER_COMPONENT_WITH_PLACEHOLDER = `Renders the placeholder`;
    const RENDER_COMPONENT_WITH_PLACEHOLDER_AND_STATE = `Renders the placeholder when component is in a ${state} state`;
    const testString =
      state === 'default'
        ? RENDER_COMPONENT_WITH_PLACEHOLDER
        : RENDER_COMPONENT_WITH_PLACEHOLDER_AND_STATE;

    test(`${testString}`, () => {
      render(composedStory);
      expect.assertions(1);
      const inputElement = screen.getByPlaceholderText('Placeholder');

      expect(inputElement).toBeInTheDocument();
    });
  };

  tests.forEach((test) => placeholderTest(test.composedStory, test.state));
};

const runActionTests = (tests: StoryWithState[]) => {
  const actionTest = (composedStory: ReactElement, state: States) => {
    const RENDER_COMPONENT_WITH_ACTION = `Renders the action button`;
    const RENDER_COMPONENT_WITH_ACTION_AND_STATE = `Renders the action button when component is in a ${state} state`;
    const testString =
      state === 'default'
        ? RENDER_COMPONENT_WITH_ACTION
        : RENDER_COMPONENT_WITH_ACTION_AND_STATE;

    test(`${testString}`, () => {
      render(composedStory);
      expect.assertions(1);
      const actionButton = screen.getByTestId('storybookDemoAction');

      expect(actionButton).toBeInTheDocument();
    });
  };

  tests.forEach((test) => actionTest(test.composedStory, test.state));
};

const runHelperTextTests = (tests: StoryWithState[]) => {
  const helperTextTest = (composedStory: ReactElement, state: States) => {
    const RENDER_COMPONENT_WITH_HELPER_TEXT = `Renders the helper text`;
    const RENDER_COMPONENT_WITH_HELPER_TEXT_AND_STATE = `Renders the helper text when component is in a ${state} state`;
    const testString =
      state === 'default'
        ? RENDER_COMPONENT_WITH_HELPER_TEXT
        : RENDER_COMPONENT_WITH_HELPER_TEXT_AND_STATE;

    test(`${testString}`, () => {
      render(composedStory);
      expect.assertions(1);
      const helperTextElement = screen.getByText('Helper Text');

      expect(helperTextElement).toBeInTheDocument();
    });
  };

  tests.forEach((test) => helperTextTest(test.composedStory, test.state));
};

const testArrays: Record<string, StoryWithState[]> = {
  default: [
    { composedStory: <Base />, state: 'default' },
    { composedStory: <Disabled />, state: 'disabled' },
    { composedStory: <Error />, state: 'error' },
    { composedStory: <Warning />, state: 'warning' },
  ],
  placeholder: [
    { composedStory: <WithPlaceholder />, state: 'default' },
    { composedStory: <DisabledWithPlaceholder />, state: 'disabled' },
    { composedStory: <ErrorWithPlaceholder />, state: 'error' },
    { composedStory: <WarningWithPlaceholder />, state: 'warning' },
  ],
  helperText: [
    { composedStory: <WithHelperText />, state: 'default' },
    { composedStory: <DisabledWithHelperText />, state: 'disabled' },
    { composedStory: <ErrorWithHelperText />, state: 'error' },
    { composedStory: <WarningWithHelperText />, state: 'warning' },
  ],
  action: [
    { composedStory: <WithAction />, state: 'default' },
    { composedStory: <DisabledWithAction />, state: 'disabled' },
    { composedStory: <ErrorWithAction />, state: 'error' },
    { composedStory: <WarningWithAction />, state: 'warning' },
  ],
  placeholderAndHelperText: [
    { composedStory: <WithPlaceholderAndHelperText />, state: 'default' },
    {
      composedStory: <DisabledWithPlaceholderAndHelperText />,
      state: 'disabled',
    },
    { composedStory: <ErrorWithPlaceholderAndHelperText />, state: 'error' },
    {
      composedStory: <WarningWithPlaceholderAndHelperText />,
      state: 'warning',
    },
  ],
  helperTextAndAction: [
    { composedStory: <WithHelperTextAndAction />, state: 'default' },
    { composedStory: <DisabledWithHelperTextAndAction />, state: 'disabled' },
    { composedStory: <ErrorWithHelperTextAndAction />, state: 'error' },
    { composedStory: <WarningWithHelperTextAndAction />, state: 'warning' },
  ],
  placeholderAndAction: [
    { composedStory: <WithPlaceholderAndAction />, state: 'default' },
    { composedStory: <DisabledWithPlaceholderAndAction />, state: 'disabled' },
    { composedStory: <ErrorWithPlaceholderAndAction />, state: 'error' },
    { composedStory: <WarningWithPlaceholderAndAction />, state: 'warning' },
  ],
  placeholderHelperTextAndAction: [
    {
      composedStory: <WithPlaceholderAndHelperTextAndAction />,
      state: 'default',
    },
    {
      composedStory: <DisabledWithPlaceholderAndHelperTextAndAction />,
      state: 'disabled',
    },
    {
      composedStory: <ErrorWithPlaceholderAndHelperTextAndAction />,
      state: 'error',
    },
    {
      composedStory: <WarningWithPlaceholderAndHelperTextAndAction />,
      state: 'warning',
    },
  ],
};

describe('Text Input', () => {
  const testArray = testArrays.default;
  runInputTests(testArray);
  runLabelTests(testArray);
});

describe('Text Input with placeholder', () => {
  const testArray = testArrays.placeholder;
  runInputTests(testArray);
  runLabelTests(testArray);
  runPlaceholderTests(testArray);
});

describe('Text Input with helper text', () => {
  const testArray = testArrays.helperText;
  runInputTests(testArray);
  runLabelTests(testArray);
  runHelperTextTests(testArray);
});

describe('Text Input with action', () => {
  const testArray = testArrays.action;
  runInputTests(testArray);
  runLabelTests(testArray);
  runActionTests(testArray);
});

describe('Text Input with placeholder and helper text', () => {
  const testArray = testArrays.placeholderAndHelperText;
  runInputTests(testArray);
  runLabelTests(testArray);
  runPlaceholderTests(testArray);
  runHelperTextTests(testArray);
});

describe('Text Input with helper text and action', () => {
  const testArray = testArrays.helperTextAndAction;
  runInputTests(testArray);
  runLabelTests(testArray);
  runHelperTextTests(testArray);
  runActionTests(testArray);
});

describe('Text Input with placeholder and action', () => {
  const testArray = testArrays.placeholderAndAction;
  runInputTests(testArray);
  runLabelTests(testArray);
  runPlaceholderTests(testArray);
  runActionTests(testArray);
});

describe('Text Input with placeholder, helper text and action', () => {
  const testArray = testArrays.placeholderHelperTextAndAction;
  runInputTests(testArray);
  runLabelTests(testArray);
  runPlaceholderTests(testArray);
  runHelperTextTests(testArray);
  runActionTests(testArray);
});
