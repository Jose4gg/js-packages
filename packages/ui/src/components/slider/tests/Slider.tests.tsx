import { composeStories } from '@storybook/react';
import { expect } from '@storybook/test';
import { fireEvent, render, screen } from '@testing-library/react';

import { testStoryLengths } from '@tests/shared-test-cases';

import * as SliderStories from '@stories/slider/Slider.stories';
import * as AdpSliderStories from '@stories/slider/adp/Slider.stories';
import * as UpwiseSliderStories from '@stories/slider/upwise/Slider.stories';

import { describe, test, vi } from 'vitest';

const { Primary, Vertical } = composeStories(SliderStories);

const defaultStoriesObj = composeStories(SliderStories);
const adpStoriesObj = composeStories(AdpSliderStories);
const upwiseStoriesObj = composeStories(UpwiseSliderStories);

testStoryLengths({
  defaultStoriesObj,
  adpStoriesObj,
  upwiseStoriesObj,
});

const allStories = [<Primary />, <Vertical />];

describe('The Slider renders', () => {
  allStories.forEach((story) => {
    test(`Renders the ${story.type.storyName} Slider properly`, () => {
      expect.assertions(1);

      render(story);
      const SliderElement = screen.getByTestId('slider');

      expect(SliderElement).toBeInTheDocument();
    });
  });
});

describe('The Slider Changes Value', () => {
  test('The Slider defaults to a value of 50', async () => {
    render(<Primary onChange={vi.fn()} />);

    const slider = screen.getByTestId('slider');
    expect(slider).toHaveValue('50');
  });

  test('The Slider changes value', async () => {
    render(<Primary onChange={vi.fn()} />);

    const slider = screen.getByTestId('slider');
    fireEvent.change(slider, { target: { value: '75' } });

    expect(slider).toHaveValue('75');
  });
});
