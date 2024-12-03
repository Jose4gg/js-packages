import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as PillStories from '@stories/pill/Pill.stories';
import * as adpPillStories from '@stories/pill/adp/Pill.stories';
import * as upwisePillStories from '@stories/pill/upwise/Pill.stories';
import { testStoryLengths } from '@tests/shared-test-cases';
import { describe, expect, test } from 'vitest';

const {
  Default,
  PlanHighlights,
  Recommended,
  RecommendedBordered,
  RecommendedBorderless,
  RecommendedBorderlessWithNoText,
  RecommendedBorderedWithNoText,
  RecommendedWithNoText,
  Waived,
  WaivedWithNoText,
} = composeStories(PillStories);

const defaultStoriesObj = composeStories(PillStories);
const adpStoriesObj = composeStories(adpPillStories);
const upwiseStoriesObj = composeStories(upwisePillStories);

testStoryLengths({ defaultStoriesObj, adpStoriesObj, upwiseStoriesObj });

const allStories = [
  <Default />,
  <PlanHighlights />,
  <Recommended />,
  <RecommendedBordered />,
  <RecommendedBorderless />,
  <RecommendedBorderlessWithNoText />,
  <RecommendedBorderedWithNoText />,
  <RecommendedWithNoText />,
  <Waived />,
  <WaivedWithNoText />,
];

describe('Pill Tests', () => {
  allStories.forEach((story) => {
    test(`Renders the ${story.type.storyName} pill properly`, () => {
      render(story);

      const pillElement = screen.getByTestId('pillStorybookDemo');
      expect(pillElement).toBeInTheDocument();
    });
  });
});

describe('Pill Props Tests', () => {
  test(`Icon is properly shown in the pill`, () => {
    render(<Recommended />);

    expect(screen.queryByTestId('pill-icon')).toBeInTheDocument();
  });

  test(`Text is properly shown in the pill`, () => {
    render(<PlanHighlights />);

    const childrenElement = screen.queryByText('HSA Eligible');
    expect(childrenElement).toBeInTheDocument();
  });
});
