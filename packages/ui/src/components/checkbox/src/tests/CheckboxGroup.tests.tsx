import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as CheckboxGroupStories from '@stories/checkbox/CheckboxGroup.stories';
import * as AdpCheckboxGroupStories from '@stories/checkbox/adp/CheckboxGroup.stories';
import * as UpwiseCheckboxGroupStories from '@stories/checkbox/upwise/CheckboxGroup.stories';
import { testStoryLengths } from '@tests/shared-test-cases';
import React from 'react';
import { describe, expect, test } from 'vitest';

const {
  Default,
  Icon,
  AutoGridOrientation,
  DefaultOrientation,
  HorizontalOrientation,
  VerticalOrientation,
} = composeStories(CheckboxGroupStories);

const defaultStoriesObj = composeStories(CheckboxGroupStories);
const adpStoriesObj = composeStories(AdpCheckboxGroupStories);
const upwiseStoriesObj = composeStories(UpwiseCheckboxGroupStories);

const allStories = [
  <Default />,
  <Icon />,
  <AutoGridOrientation />,
  <DefaultOrientation />,
  <HorizontalOrientation />,
  <VerticalOrientation />,
];

testStoryLengths({ defaultStoriesObj, adpStoriesObj, upwiseStoriesObj });

describe('The checkbox group renders', () => {
  allStories.forEach((story) => {
    test(`Renders the ${story.type.storyName} checkbox group properly`, () => {
      expect.assertions(1);

      render(story);
      const checkboxElement = screen.getByTestId('checkbox-storybook-demo');

      expect(checkboxElement).toBeInTheDocument();
    });
  });

  test('The checkbox input renders the label', () => {
    expect.assertions(1);

    render(<Default />);
    const labelText = screen.getByText('Label 1');

    expect(labelText).toBeInTheDocument();
  });
});
