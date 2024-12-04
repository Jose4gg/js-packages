import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import * as AccordionStories from '@stories/accordion/Accordion.stories';
import * as AdpAccordionStories from '@stories/accordion/adp/Accordion.stories';
import * as UpwiseAccordionStories from '@stories/accordion/upwise/Accordion.stories';
import { testStoryLengths } from '@tests/shared-test-cases';
import { describe, expect, test, vi } from 'vitest';
import { act } from 'react';

const { AllowMultipleOpens, Default, SingleItem } = composeStories(AccordionStories);

const defaultStoriesObj = composeStories(AccordionStories);
const adpStoriesObj = composeStories(AdpAccordionStories);
const upwiseStoriesObj = composeStories(UpwiseAccordionStories);

testStoryLengths({ defaultStoriesObj, adpStoriesObj, upwiseStoriesObj });

const allStories = [<AllowMultipleOpens />, <Default />, <SingleItem />];

window.scrollTo = vi.fn() as unknown as typeof window.scrollTo;

describe('Accordion Render Tests', () => {
  allStories.forEach((story) => {
    test(`Renders the ${story.type.storyName} accordion properly`, () => {
      render(story);

      const accordionTrigger = screen.getByTestId('accordion-test-id');
      expect(accordionTrigger).toBeInTheDocument();
    });
  });
});

describe('Accordion Interaction Tests', () => {
  test('Clicking on an accordion item opens and closes it as intended', async () => {
    render(<Default />);

    const accordionTrigger = await screen.findByTestId('chapter-1');

    await act(() => accordionTrigger.click());

    await waitFor(() => {
      expect(accordionTrigger).toHaveAttribute('aria-expanded', 'true');
    });

    await act(() => accordionTrigger.click());

    await waitFor(() => {
      expect(accordionTrigger).toHaveAttribute('aria-expanded', 'false');
    });
  });

  test('Allow Multiple Opens works as intended', async () => {
    render(<AllowMultipleOpens />);

    const accordionTrigger1 = await screen.findByTestId('chapter-1');
    const accordionTrigger2 = await screen.findByTestId('chapter-2');

    await act(() => accordionTrigger1.click());
    await act(() => accordionTrigger2.click());

    await waitFor(() => {
      expect(accordionTrigger1).toHaveAttribute('aria-expanded', 'true');
      expect(accordionTrigger2).toHaveAttribute('aria-expanded', 'true');
    });

    await act(() => accordionTrigger1.click());
    await act(() => accordionTrigger2.click());

    await waitFor(() => {
      expect(accordionTrigger1).toHaveAttribute('aria-expanded', 'false');
      expect(accordionTrigger2).toHaveAttribute('aria-expanded', 'false');
    });
  });
});
