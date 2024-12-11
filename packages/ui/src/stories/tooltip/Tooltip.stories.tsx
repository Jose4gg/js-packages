import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Meta, StoryObj } from '@storybook/react';
import { screen, userEvent } from '@storybook/testing-library';

import { Tooltip } from '../../components';

import StylesDecorator from './StylesDecorator';
import { Wrapper } from './Tooltip.styled';
import { StoryArgs } from './Tooltip.types';
import { storyConfigs } from './storyConfigs';

const {
  base,
  top,
  topWithNotEnoughSpaceAbove,
  topWithNotEnoughSpaceRight,
  topWithNotEnoughSpaceLeft,
  topWithNotEnoughSpaceAboveAndRight,
  topWithNotEnoughSpaceAboveAndLeft,
  right,
  rightWithNotEnoughSpaceAbove,
  rightWithNotEnoughSpaceRight,
  rightWithNotEnoughSpaceBelow,
  bottom,
  bottomWithNotEnoughSpaceBelow,
  bottomWithNotEnoughSpaceRight,
  bottomWithNotEnoughSpaceLeft,
  bottomWithNotEnoughSpaceBelowAndRight,
  bottomWithNotEnoughSpaceBelowAndLeft,
  left,
  leftWithNotEnoughSpaceAbove,
  leftWithNotEnoughSpaceBelow,
  leftWithNotEnoughSpaceLeft,
  baseMobile,
  withLabel,
  withTextTrigger,
  withTextTriggerAndNotEnoughSpaceAbove,
  withTextTriggerAndNotEnoughSpaceRight,
  withTextTriggerAndNotEnoughSpaceBelow,
  withTextTriggerAndNotEnoughSpaceLeft,
  withTextTriggerAndLeftPlacement,
  withTextTriggerAndRightPlacement,
  withTextTriggerAndBottomPlacement,
  withLongerTextTrigger,
  mobileWithTextTrigger,
  // topMobile,
  // topWithNotEnoughSpaceAboveMobile,
  // topWithNotEnoughSpaceRightMobile,
  // topWithNotEnoughSpaceLeftMobile,
  // topWithNotEnoughSpaceAboveAndRightMobile,
  // topWithNotEnoughSpaceAboveAndLeftMobile,
  // rightMobile,
  // rightWithNotEnoughSpaceAboveMobile,
  // rightWithNotEnoughSpaceRightMobile,
  // rightWithNotEnoughSpaceBelowMobile,
  // bottomMobile,
  // bottomWithNotEnoughSpaceBelowMobile,
  // bottomWithNotEnoughSpaceRightMobile,
  // bottomWithNotEnoughSpaceLeftMobile,
  // bottomWithNotEnoughSpaceBelowAndRightMobile,
  // bottomWithNotEnoughSpaceBelowAndLeftMobile,
  // leftMobile,
  // leftWithNotEnoughSpaceAboveMobile,
  // leftWithNotEnoughSpaceBelowMobile,
  // leftWithNotEnoughSpaceLeftMobile,
} = storyConfigs;

const meta: Meta<StoryArgs> = {
  component: Tooltip,
  argTypes: {
    content: { control: 'text' },
    placement: {
      control: { type: 'select', options: ['top', 'right', 'bottom', 'left'] },
    },
    breakTooltipBounds: {
      control: {
        type: 'select',
        options: [
          'top',
          'right',
          'bottom',
          'left',
          'topRight',
          'topLeft',
          'bottomRight',
          'bottomLeft',
        ],
      },
    },
  },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'ipad',
    },
  },

  decorators: [
    (Story, context) => {
      const { breakTooltipBounds } = context.args;
      return (
        <Wrapper breakTooltipBounds={breakTooltipBounds}>
          <Story {...context.args} />
        </Wrapper>
      );
    },
    StylesDecorator,
  ],
};

const hoverAction = async () => {
  const tooltip = await screen.findByTestId('tooltip');
  userEvent.hover(tooltip);
};

const clickAction = async () => {
  const tooltip = await screen.findByTestId('tooltip');
  userEvent.click(tooltip);
};

export default meta;

export type Story = StoryObj<typeof Tooltip>;

export const Base: Story = base;

export const Top: Story = top;

export const TopWithNotEnoughSpaceAbove: Story = topWithNotEnoughSpaceAbove;

export const TopWithNotEnoughSpaceRight: Story = topWithNotEnoughSpaceRight;

export const TopWithNotEnoughSpaceLeft: Story = topWithNotEnoughSpaceLeft;

export const TopWithNotEnoughSpaceTopAndRight: Story = topWithNotEnoughSpaceAboveAndRight;

export const TopWithNotEnoughSpaceTopAndLeft: Story = topWithNotEnoughSpaceAboveAndLeft;

export const Right: Story = right;

export const RightWithNotEnoughSpaceAbove: Story = rightWithNotEnoughSpaceAbove;

export const RightWithNotEnoughSpaceRight: Story = rightWithNotEnoughSpaceRight;

export const RightWithNotEnoughSpaceBelow: Story = rightWithNotEnoughSpaceBelow;

export const Bottom: Story = bottom;

export const BottomWithNotEnoughSpaceBelow: Story = bottomWithNotEnoughSpaceBelow;

export const BottomWithNotEnoughSpaceRight: Story = bottomWithNotEnoughSpaceRight;

export const BottomWithNotEnoughSpaceLeft: Story = bottomWithNotEnoughSpaceLeft;

export const BottomWithNotEnoughSpaceBelowAndRight: Story = bottomWithNotEnoughSpaceBelowAndRight;

export const BottomWithNotEnoughSpaceBelowAndLeft: Story = bottomWithNotEnoughSpaceBelowAndLeft;

export const Left: Story = left;

export const LeftWithNotEnoughSpaceAbove: Story = leftWithNotEnoughSpaceAbove;

export const LeftWithNotEnoughSpaceBelow: Story = leftWithNotEnoughSpaceBelow;

export const LeftWithNotEnoughSpaceLeft: Story = leftWithNotEnoughSpaceLeft;

// I guess this is for aria stuff???
export const WithLabel: Story = withLabel;

export const WithTextTrigger: Story = withTextTrigger;

export const WithTextTriggerAndNotEnoughSpaceAbove: Story = withTextTriggerAndNotEnoughSpaceAbove;

export const WithTextTriggerAndNotEnoughSpaceRight: Story = withTextTriggerAndNotEnoughSpaceRight;

export const WithTextTriggerAndNotEnoughSpaceBelow: Story = withTextTriggerAndNotEnoughSpaceBelow;

export const WithTextTriggerAndNotEnoughSpaceLeft: Story = withTextTriggerAndNotEnoughSpaceLeft;

export const WithLongerTextTrigger: Story = withLongerTextTrigger;

export const WithTextTriggerAndLeftPlacement: Story = withTextTriggerAndLeftPlacement;

export const WithTextTriggerAndRightPlacement: Story = withTextTriggerAndRightPlacement;

export const WithTextTriggerAndBottomPlacement: Story = withTextTriggerAndBottomPlacement;

export const MobileBase: Story = baseMobile;
MobileBase.play = clickAction;

export const MobileWithTextTrigger: Story = mobileWithTextTrigger;
MobileWithTextTrigger.play = clickAction;
// For now we just need the base, because all mobile stories should share the same functionality. I will leave these in,
// in case that changes.

// export const MobileTop: Story = topMobile;
// export const MobileTopWithNotEnoughSpaceAbove: Story =
//   topWithNotEnoughSpaceAboveMobile;
// export const MobileTopWithNotEnoughSpaceRight: Story =
//   topWithNotEnoughSpaceRightMobile;
// export const MobileTopWithNotEnoughSpaceLeft: Story =
//   topWithNotEnoughSpaceLeftMobile;
// export const MobileTopWithNotEnoughSpaceTopAndRight: Story =
//   topWithNotEnoughSpaceAboveAndRightMobile;
// export const MobileTopWithNotEnoughSpaceTopAndLeft: Story =
//   topWithNotEnoughSpaceAboveAndLeftMobile;
// export const MobileRight: Story = rightMobile;
// export const MobileRightWithNotEnoughSpaceAbove: Story =
//   rightWithNotEnoughSpaceAboveMobile;
// export const MobileRightWithNotEnoughSpaceRight: Story =
//   rightWithNotEnoughSpaceRightMobile;
// export const MobileRightWithNotEnoughSpaceBelow: Story =
//   rightWithNotEnoughSpaceBelowMobile;
// export const MobileBottom: Story = bottomMobile;
// export const MobileBottomWithNotEnoughSpaceBelow: Story =
//   bottomWithNotEnoughSpaceBelowMobile;
// export const MobileBottomWithNotEnoughSpaceRight: Story =
//   bottomWithNotEnoughSpaceRightMobile;
// export const MobileBottomWithNotEnoughSpaceLeft: Story =
//   bottomWithNotEnoughSpaceLeftMobile;
// export const MobileBottomWithNotEnoughSpaceBelowAndRight: Story =
//   bottomWithNotEnoughSpaceBelowAndRightMobile;
// export const MobileBottomWithNotEnoughSpaceBelowAndLeft: Story =
//   bottomWithNotEnoughSpaceBelowAndLeftMobile;
// export const MobileLeft: Story = leftMobile;
// export const MobileLeftWithNotEnoughSpaceAbove: Story =
//   leftWithNotEnoughSpaceAboveMobile;
// export const MobileLeftWithNotEnoughSpaceBelow: Story =
//   leftWithNotEnoughSpaceBelowMobile;
// export const MobileLeftWithNotEnoughSpaceLeft: Story =
//   leftWithNotEnoughSpaceLeftMobile;

// const mobileStories = [
//   MobileBase,
//   MobileTop,
//   MobileTopWithNotEnoughSpaceAbove,
//   MobileTopWithNotEnoughSpaceRight,
//   MobileTopWithNotEnoughSpaceLeft,
//   MobileTopWithNotEnoughSpaceTopAndRight,
//   MobileTopWithNotEnoughSpaceTopAndLeft,
//   MobileRight,
//   MobileRightWithNotEnoughSpaceAbove,
//   MobileRightWithNotEnoughSpaceRight,
//   MobileRightWithNotEnoughSpaceBelow,
//   MobileBottom,
//   MobileBottomWithNotEnoughSpaceBelow,
//   MobileBottomWithNotEnoughSpaceRight,
//   MobileBottomWithNotEnoughSpaceLeft,
//   MobileBottomWithNotEnoughSpaceBelowAndRight,
//   MobileBottomWithNotEnoughSpaceBelowAndLeft,
//   MobileLeft,
//   MobileLeftWithNotEnoughSpaceAbove,
//   MobileLeftWithNotEnoughSpaceBelow,
//   MobileLeftWithNotEnoughSpaceLeft,
// ];

// mobileStories.forEach((story) => {
//   // eslint-disable-next-line no-param-reassign
//   story.play = clickAction;
// });

const nonMobileStories = [
  Base,
  Top,
  TopWithNotEnoughSpaceAbove,
  TopWithNotEnoughSpaceRight,
  TopWithNotEnoughSpaceLeft,
  TopWithNotEnoughSpaceTopAndRight,
  TopWithNotEnoughSpaceTopAndLeft,
  Right,
  RightWithNotEnoughSpaceAbove,
  RightWithNotEnoughSpaceRight,
  RightWithNotEnoughSpaceBelow,
  Bottom,
  BottomWithNotEnoughSpaceBelow,
  BottomWithNotEnoughSpaceRight,
  BottomWithNotEnoughSpaceLeft,
  BottomWithNotEnoughSpaceBelowAndRight,
  BottomWithNotEnoughSpaceBelowAndLeft,
  Left,
  LeftWithNotEnoughSpaceAbove,
  LeftWithNotEnoughSpaceBelow,
  LeftWithNotEnoughSpaceLeft,
];

nonMobileStories.forEach((story) => {
  story.play = hoverAction;
});
