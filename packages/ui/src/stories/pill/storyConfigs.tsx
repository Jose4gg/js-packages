import { StoryObj } from '@storybook/react';
import Pill from '../../components/pill';

import CheckMark from '../../icons/CheckMark';
import Mortgage from '../../icons/Mortgage';
import Waived from '../../icons/Waived';

export const storyConfigs: Record<string, StoryObj<typeof Pill>> = {
  default: {
    args: {
      id: 'pillStorybookDemo',
      text: 'Recommended',
      variant: 'recommended',
    },
  },

  recommended: {
    args: {
      id: 'pillStorybookDemo',
      icon: <CheckMark size={12} strokeColor="#FFFFFF" />,
      text: 'Recommended',
      variant: 'recommended',
    },
  },

  recommendedWithNoText: {
    args: {
      id: 'pillStorybookDemo',
      icon: <CheckMark size={12} strokeColor="#FFFFFF" />,
      variant: 'recommended',
    },
  },

  recommendedBorderless: {
    args: {
      id: 'pillStorybookDemo',
      icon: <CheckMark size={12} strokeColor="#0030EA" />,
      text: 'Recommended',
      variant: 'recommendedBorderless',
    },
  },

  recommendedBorderlessWithNoText: {
    args: {
      id: 'pillStorybookDemo',
      icon: <CheckMark size={12} strokeColor="#0030EA" />,
      variant: 'recommendedBorderless',
    },
  },

  recommendedBordered: {
    args: {
      id: 'pillStorybookDemo',
      icon: <Mortgage size={12} fillColor="#000000" />,
      text: 'Sponsored',
      variant: 'recommendedBordered',
    },
  },

  recommendedBorderedWithNoText: {
    args: {
      id: 'pillStorybookDemo',
      icon: <Mortgage size={12} fillColor="#000000" />,
      variant: 'recommendedBordered',
    },
  },

  planHighlights: {
    args: {
      id: 'pillStorybookDemo',
      text: 'HSA Eligible',
      variant: 'planHighlights',
    },
  },

  waived: {
    args: {
      id: 'pillStorybookDemo',
      icon: <Waived />,
      text: 'Waived',
      variant: 'waived',
    },
  },

  waivedWithNoText: {
    args: {
      id: 'pillStorybookDemo',
      icon: <Waived />,
      variant: 'waived',
    },
  },
};
