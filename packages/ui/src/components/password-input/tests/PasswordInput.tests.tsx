import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as PasswordInputStories from '@stories/password-input/PasswordInput.stories';
import * as AdpPasswordInputStories from '@stories/password-input/adp/PasswordInput.stories';
import * as UpwisePasswordInputStories from '@stories/password-input/upwise/PasswordInput.stories';

import { testStoryLengths } from '@tests/shared-test-cases';
import React from 'react';
import { describe, expect, it } from 'vitest';

const { Password, Disabled, Error, Warning, Loading, WithHelperText } =
  composeStories(PasswordInputStories);

const defaultStoriesObj = composeStories(PasswordInputStories);
const adpStoriesObj = composeStories(AdpPasswordInputStories);
const upwiseStoriesObj = composeStories(UpwisePasswordInputStories);

testStoryLengths({ defaultStoriesObj, adpStoriesObj, upwiseStoriesObj });

const expectMap = {
  disabled: (element: HTMLElement) => expect(element).toBeDisabled(),
  warning: (element: HTMLElement) => expect(element).toHaveClass('warning'),
  error: (element: HTMLElement) => expect(element).toHaveClass('error'),
  loading: (element: HTMLElement) => expect(element).toHaveClass('loading'),
};

const allStories = {
  default: [<Password />],
  errors: [<Error />],
  warnings: [<Warning />],
  disabled: [<Disabled />],
  loading: [<Loading />],
  withHelperText: [<WithHelperText />],
};

describe('PasswordInput renders', () => {
  Object.values(allStories).forEach((stories) => {
    stories.forEach((story) => {
      it('should render', () => {
        render(story);
        const input = screen.getByTestId('storybookDemo');
        expect(input).toBeInTheDocument();
      });
    });
  });
});

describe('PasswordInoput renders correct states', () => {
  describe('Error', () => {
    allStories.errors.forEach((story) => {
      it(`${story.type.storyName} should have error class`, () => {
        expect.assertions(1);
        render(story);
        const input = screen.getByTestId('storybookDemo');
        expectMap.error(input);
      });
    });
  });

  describe('Warning', () => {
    allStories.warnings.forEach((story) => {
      it(`${story.type.storyName} should have warning class`, () => {
        expect.assertions(1);
        render(story);
        const input = screen.getByTestId('storybookDemo');
        expectMap.warning(input);
      });
    });
  });

  describe('Disabled', () => {
    allStories.disabled.forEach((story) => {
      it(`${story.type.storyName} should be disabled`, () => {
        expect.assertions(1);
        render(story);
        const input = screen.getByTestId('storybookDemo');
        expectMap.disabled(input);
      });
    });
  });

  describe('Loading', () => {
    allStories.loading.forEach((story) => {
      it(`${story.type.storyName} should have loading class`, () => {
        expect.assertions(1);
        render(story);
        const input = screen.getByTestId('storybookDemo');
        expectMap.loading(input);
      });
    });
  });

  describe('With Helper Text', () => {
    allStories.withHelperText.forEach((story) => {
      it(`${story.type.storyName} should have helper text`, () => {
        expect.assertions(1);
        render(story);
        const helperText = screen.getByTestId('storybookDemoHelperText');
        expect(helperText).toBeInTheDocument();
      });
    });
  });
});
