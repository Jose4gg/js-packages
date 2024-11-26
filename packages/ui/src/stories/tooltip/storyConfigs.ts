import { StoryObj } from '@storybook/react';

import { StoryArgs } from './Tooltip.types';

const defaultArgs = {
  children:
    "Existed Elendil clearly winter highest news. Anárion order whose gathered. Hear my voice. Come back to the light. Lords forfeit rack welcome tunnel clearly Brave dies fine? Undeceased sister-sons scale valued agents Kingdom requested civil. Price strangers runes Gamgee nab giant ill-tempered? Celebrate Noldorin cry time sires treasure whatever. Revenge isn't examine Glamdring scratch emptiness blow water four?",
  label: 'Tooltip',
  id: 'tooltip',
};

const mobileParams = {
  viewport: {
    defaultViewport: 'iphone6',
  },
};

export const storyConfigs: Record<string, StoryObj<StoryArgs>> = {
  base: {
    args: defaultArgs,
  },
  top: {
    args: { ...defaultArgs, placement: 'top' },
  },
  topWithNotEnoughSpaceAbove: {
    args: { ...defaultArgs, placement: 'top', breakTooltipBounds: 'top' },
  },
  topWithNotEnoughSpaceRight: {
    args: { ...defaultArgs, placement: 'top', breakTooltipBounds: 'right' },
  },
  topWithNotEnoughSpaceLeft: {
    args: { ...defaultArgs, placement: 'top', breakTooltipBounds: 'left' },
  },
  topWithNotEnoughSpaceAboveAndRight: {
    args: { ...defaultArgs, placement: 'top', breakTooltipBounds: 'topRight' },
  },
  topWithNotEnoughSpaceAboveAndLeft: {
    args: { ...defaultArgs, placement: 'top', breakTooltipBounds: 'topLeft' },
  },
  right: {
    args: { ...defaultArgs, placement: 'right' },
  },
  rightWithNotEnoughSpaceAbove: {
    args: { ...defaultArgs, placement: 'right', breakTooltipBounds: 'top' },
  },
  rightWithNotEnoughSpaceRight: {
    args: { ...defaultArgs, placement: 'right', breakTooltipBounds: 'right' },
  },
  rightWithNotEnoughSpaceBelow: {
    args: { ...defaultArgs, placement: 'right', breakTooltipBounds: 'bottom' },
  },
  bottom: {
    args: { ...defaultArgs, placement: 'bottom' },
  },
  bottomWithNotEnoughSpaceBelow: {
    args: { ...defaultArgs, placement: 'bottom', breakTooltipBounds: 'bottom' },
  },
  bottomWithNotEnoughSpaceRight: {
    args: { ...defaultArgs, placement: 'bottom', breakTooltipBounds: 'right' },
  },
  bottomWithNotEnoughSpaceLeft: {
    args: { ...defaultArgs, placement: 'bottom', breakTooltipBounds: 'left' },
  },
  bottomWithNotEnoughSpaceBelowAndRight: {
    args: {
      ...defaultArgs,
      placement: 'bottom',
      breakTooltipBounds: 'bottomRight',
    },
  },
  bottomWithNotEnoughSpaceBelowAndLeft: {
    args: {
      ...defaultArgs,
      placement: 'bottom',
      breakTooltipBounds: 'bottomLeft',
    },
  },
  left: {
    args: { ...defaultArgs, placement: 'left' },
  },
  leftWithNotEnoughSpaceAbove: {
    args: { ...defaultArgs, placement: 'left', breakTooltipBounds: 'top' },
  },
  leftWithNotEnoughSpaceBelow: {
    args: { ...defaultArgs, placement: 'left', breakTooltipBounds: 'bottom' },
  },
  leftWithNotEnoughSpaceLeft: {
    args: { ...defaultArgs, placement: 'left', breakTooltipBounds: 'left' },
  },
  leftWithNotEnoughSpaceAboveAndLeft: {
    args: { ...defaultArgs, placement: 'left', breakTooltipBounds: 'topLeft' },
  },
  leftWithNotEnoughSpaceBelowAndLeft: {
    args: {
      ...defaultArgs,
      placement: 'left',
      breakTooltipBounds: 'bottomLeft',
    },
  },
  baseMobile: {
    args: defaultArgs,
    parameters: {
      ...mobileParams,
    },
  },
  topMobile: {
    args: { ...defaultArgs, placement: 'top' },
    parameters: {
      ...mobileParams,
    },
  },
  topWithNotEnoughSpaceAboveMobile: {
    args: { ...defaultArgs, placement: 'top', breakTooltipBounds: 'top' },
    parameters: {
      ...mobileParams,
    },
  },
  topWithNotEnoughSpaceRightMobile: {
    args: { ...defaultArgs, placement: 'top', breakTooltipBounds: 'right' },
    parameters: {
      ...mobileParams,
    },
  },
  topWithNotEnoughSpaceLeftMobile: {
    args: { ...defaultArgs, placement: 'top', breakTooltipBounds: 'left' },
    parameters: {
      ...mobileParams,
    },
  },
  topWithNotEnoughSpaceAboveAndRightMobile: {
    args: { ...defaultArgs, placement: 'top', breakTooltipBounds: 'topRight' },
    parameters: {
      ...mobileParams,
    },
  },
  topWithNotEnoughSpaceAboveAndLeftMobile: {
    args: { ...defaultArgs, placement: 'top', breakTooltipBounds: 'topLeft' },
    parameters: {
      ...mobileParams,
    },
  },
  rightMobile: {
    args: { ...defaultArgs, placement: 'right' },
    parameters: {
      ...mobileParams,
    },
  },
  rightWithNotEnoughSpaceAboveMobile: {
    args: { ...defaultArgs, placement: 'right', breakTooltipBounds: 'top' },
    parameters: {
      ...mobileParams,
    },
  },
  rightWithNotEnoughSpaceRightMobile: {
    args: { ...defaultArgs, placement: 'right', breakTooltipBounds: 'right' },
    parameters: {
      ...mobileParams,
    },
  },
  rightWithNotEnoughSpaceBelowMobile: {
    args: { ...defaultArgs, placement: 'right', breakTooltipBounds: 'bottom' },
    parameters: {
      ...mobileParams,
    },
  },
  bottomMobile: {
    args: { ...defaultArgs, placement: 'bottom' },
    parameters: {
      ...mobileParams,
    },
  },
  bottomWithNotEnoughSpaceBelowMobile: {
    args: { ...defaultArgs, placement: 'bottom', breakTooltipBounds: 'bottom' },
    parameters: {
      ...mobileParams,
    },
  },
  bottomWithNotEnoughSpaceRightMobile: {
    args: { ...defaultArgs, placement: 'bottom', breakTooltipBounds: 'right' },
    parameters: {
      ...mobileParams,
    },
  },
  bottomWithNotEnoughSpaceLeftMobile: {
    args: { ...defaultArgs, placement: 'bottom', breakTooltipBounds: 'left' },
    parameters: {
      ...mobileParams,
    },
  },
  bottomWithNotEnoughSpaceBelowAndRightMobile: {
    args: {
      ...defaultArgs,
      placement: 'bottom',
      breakTooltipBounds: 'bottomRight',
    },
    parameters: {
      ...mobileParams,
    },
  },
  bottomWithNotEnoughSpaceBelowAndLeftMobile: {
    args: {
      ...defaultArgs,
      placement: 'bottom',
      breakTooltipBounds: 'bottomLeft',
    },
    parameters: {
      ...mobileParams,
    },
  },
  leftMobile: {
    args: { ...defaultArgs, placement: 'left' },
    parameters: {
      ...mobileParams,
    },
  },
  leftWithNotEnoughSpaceAboveMobile: {
    args: { ...defaultArgs, placement: 'left', breakTooltipBounds: 'top' },
    parameters: {
      ...mobileParams,
    },
  },
  leftWithNotEnoughSpaceBelowMobile: {
    args: { ...defaultArgs, placement: 'left', breakTooltipBounds: 'bottom' },
    parameters: {
      ...mobileParams,
    },
  },
  leftWithNotEnoughSpaceLeftMobile: {
    args: { ...defaultArgs, placement: 'left', breakTooltipBounds: 'left' },
    parameters: {
      ...mobileParams,
    },
  },
  withLabel: {
    args: { ...defaultArgs, label: 'Label' },
  },
  withTextTrigger: {
    args: { ...defaultArgs, text: 'Text', type: 'text' },
  },
  withTextTriggerAndLeftPlacement: {
    args: { ...defaultArgs, text: 'Text', type: 'text', placement: 'left' },
  },
  withTextTriggerAndRightPlacement: {
    args: { ...defaultArgs, text: 'Text', type: 'text', placement: 'right' },
  },
  withTextTriggerAndBottomPlacement: {
    args: { ...defaultArgs, text: 'Text', type: 'text', placement: 'bottom' },
  },
  withTextTriggerAndNotEnoughSpaceAbove: {
    args: {
      ...defaultArgs,
      text: 'Text',
      type: 'text',
      breakTooltipBounds: 'top',
      placement: 'top',
    },
  },
  withTextTriggerAndNotEnoughSpaceRight: {
    args: {
      ...defaultArgs,
      text: 'Text',
      type: 'text',
      breakTooltipBounds: 'right',
      placement: 'right',
    },
  },
  withTextTriggerAndNotEnoughSpaceLeft: {
    args: {
      ...defaultArgs,
      text: 'Text',
      type: 'text',
      breakTooltipBounds: 'left',
      placement: 'left',
    },
  },
  withTextTriggerAndNotEnoughSpaceBelow: {
    args: {
      ...defaultArgs,
      text: 'Text',
      type: 'text',
      breakTooltipBounds: 'bottom',
      placement: 'bottom',
    },
  },
  withLongerTextTrigger: {
    args: {
      ...defaultArgs,
      text: "Existed Elendil clearly winter highest news. Anárion order whose gathered. Hear my voice. Come back to the light. Lords forfeit rack welcome tunnel clearly Brave dies fine? Undeceased sister-sons scale valued agents Kingdom requested civil. Price strangers runes Gamgee nab giant ill-tempered? Celebrate Noldorin cry time sires treasure whatever. Revenge isn't examine Glamdring scratch emptiness blow water four?",
      type: 'text',
    },
  },
  mobileWithTextTrigger: {
    args: { ...defaultArgs, text: 'Text', type: 'text' },
    parameters: {
      ...mobileParams,
    },
  },
};
