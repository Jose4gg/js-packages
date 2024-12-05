import { StoryObj } from '@storybook/react';
import Accordion from '@components/accordion';
import type { AccordionItem } from '@components/accordion/src/types';

const TEST_ITEMS: AccordionItem[] = [
  {
    id: 'item-1',
    title: 'Chapter 1',
    analyticsId: 'chapter-1',
    content: (
      <div>
        <p>Here is the first panel of content.</p>
        <p>
          You can render anything you&apos;d like in the panel content. You can also specify if you
          want to enable support for more than one open panel at a time.
        </p>
      </div>
    ),
  },
  {
    id: 'item-2',
    title: 'Chapter 2',
    analyticsId: 'chapter-2',
    content: (
      <div style={{ paddingBottom: 20 }}>
        <p>And here is the contenet for the second panel.</p>
        <p>
          You can render anything you&apos;d like in the panel content. You can also specify if you
          want to enable support for more than one open panel at a time.
        </p>

        <p>This panel even features an image</p>
        <img
          src="https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo="
          width={200}
          alt=""
        />
        <p>You can also have lists</p>
        <ul>
          <li>Heres a list item</li>
          <li>And another</li>
          <li>And yet another</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'item-3',
    title: 'Chapter 3',
    analyticsId: 'chapter-3',
    content: (
      <div>
        <p>And here is the content for the third and final panel. </p>
      </div>
    ),
  },
];

export const storyConfigs: Record<string, StoryObj<typeof Accordion>> = {
  default: {
    args: {
      id: 'accordion1',
      label: 'accordion one label',
      items: TEST_ITEMS,
      testId: 'accordion-test-id',
    },
  },

  singleItem: {
    args: {
      id: 'accordion1',
      label: 'accordion one label',
      items: [TEST_ITEMS[0]],
      testId: 'accordion-test-id',
    },
  },

  allowMultipleOpens: {
    args: {
      id: 'accordion1',
      label: 'accordion one label',
      items: TEST_ITEMS,
      testId: 'accordion-test-id',
      allowMultipleOpens: true,
    },
  },
};
