import { composeStories } from '@storybook/react';
import { expect } from '@storybook/test';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as ButtonStories from '@stories/button/Button.stories';
import * as AdpButtonStories from '@stories/button/adp/Button.stories';
import * as UpwiseButtonStories from '@stories/button/upwise/Button.stories';
import { vi } from 'vitest';
import { describe } from 'vitest';
import { act } from 'react';
import { Mock } from 'vitest';
import { test } from 'vitest';
import { afterEach } from 'vitest';

const {
  Default,
  DefaultDark,
  DefaultLoading,
  DefaultMini,
  DefaultFullWidth,
  DefaultDisabled,
} = composeStories(ButtonStories);

const defaultStoriesObj = composeStories(ButtonStories);
const adpStoriesObj = composeStories(AdpButtonStories);
const upwiseStoriesObj = composeStories(UpwiseButtonStories);

// I am starting to think we don't need tests for all themes necessarily. I am still thinking of how we want
// to handle theming stuff. I am going to comment this out for now.
// testStoryLengths({
//   defaultStoriesObj,
//   adpStoriesObj,
//   upwiseStoriesObj,
// });

const allStories = [
  <Default />,
  <DefaultDark />,
  <DefaultLoading />,
  <DefaultMini />,
  <DefaultFullWidth />,
  <DefaultDisabled />,
];

const user = userEvent.setup();
const expectMap = {
  disabled: (element: HTMLElement) => expect(element).toBeDisabled(),
  notDisabled: (element: HTMLElement) => expect(element).not.toBeDisabled(),
  dark: (element: HTMLElement) => expect(element).toHaveClass('dark'),
  notDark: (element: HTMLElement) => expect(element).not.toHaveClass('dark'),
  loading: (element: HTMLElement) => expect(element).toHaveClass('loading'),
  notLoading: (element: HTMLElement) =>
    expect(element).not.toHaveClass('notLoading'),
  toHaveBeenCalled: (mockFunction: Mock) =>
    expect(mockFunction).toHaveBeenCalledTimes(1),
  toNotHaveBeenCalled: (mockFunction: Mock) =>
    expect(mockFunction).not.toHaveBeenCalled(),
  inTheDocument: (element: HTMLElement | null) =>
    expect(element).toBeInTheDocument(),
  notInTheDocument: (element: HTMLElement | null) =>
    expect(element).not.toBeInTheDocument(),
};

describe('The Button renders', () => {
  allStories.forEach((story) => {
    test(`Renders the ${story.type.storyName} button properly`, () => {
      expect.assertions(1);

      render(story);
      const buttonElement = screen.getByTestId('storybookDemo');
      const expectFunction = expectMap.inTheDocument;
      expectFunction(buttonElement);
    });
  });
});

describe('The button onClick', () => {
  const onClickMock = vi.fn();

  // for vitest, we need to reset this mock after each
  afterEach(() => {
    onClickMock.mockReset();
  });

  const allStoriesWithOnClick = [
    { story: <Default onClick={onClickMock} />, shouldFire: true },
    { story: <DefaultDark onClick={onClickMock} />, shouldFire: true },
    // TODO: Do we really want onClick to fire when the button is loading??
    { story: <DefaultLoading onClick={onClickMock} />, shouldFire: true },
    { story: <DefaultMini onClick={onClickMock} />, shouldFire: true },
    { story: <DefaultFullWidth onClick={onClickMock} />, shouldFire: true },
    { story: <DefaultDisabled onClick={onClickMock} />, shouldFire: false },
  ];

  allStoriesWithOnClick.forEach((storyCase) => {
    test(`onClick is fired as expected for ${storyCase.story.type.storyName} button`, async () => {
      expect.assertions(1);

      render(storyCase.story);
      const buttonElement = screen.getByTestId('storybookDemo');
      await act(async () => user.click(buttonElement));
      const expectFunction = storyCase.shouldFire
        ? expectMap.toHaveBeenCalled
        : expectMap.toNotHaveBeenCalled;
      expectFunction(onClickMock);
    });
  });
});

describe('The button class names', () => {
  allStories.forEach((story) => {
    test(`the dark class on ${story.type.storyName} button is properly set`, () => {
      expect.assertions(1);

      render(story);
      const buttonElement = screen.getByTestId('storybookDemo');
      const expectFunction =
        story.type.storyName === 'DefaultDark'
          ? expectMap.dark
          : expectMap.notDark;
      expectFunction(buttonElement);
    });

    test(`the loading class on ${story.type.storyName} button is properly set`, () => {
      expect.assertions(1);

      render(story);
      const buttonElement = screen.getByTestId('storybookDemo');
      const expectFunction =
        story.type.storyName === 'Loading'
          ? expectMap.loading
          : expectMap.notLoading;
      expectFunction(buttonElement);
    });
  });
});

describe('The button disabled state', () => {
  allStories.forEach((story) => {
    test(`is properly disabled or not on the ${story.type.storyName} button`, () => {
      expect.assertions(1);

      render(story);
      const buttonElement = screen.getByTestId('storybookDemo');
      const expectFunction =
        story.type.storyName === 'DefaultDisabled'
          ? expectMap.disabled
          : expectMap.notDisabled;
      expectFunction(buttonElement);
    });
  });
});

describe('The button children', () => {
  allStories.forEach((story) => {
    test(`are properly showing or not for the ${story.type.storyName} button`, () => {
      expect.assertions(1);

      render(story);
      const childrenElement = screen.queryByText('Button');
      const expectFunction =
        story.type.storyName === 'DefaultLoading'
          ? expectMap.notInTheDocument
          : expectMap.inTheDocument;
      expectFunction(childrenElement);
    });
  });
});
