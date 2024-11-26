import { StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Checkbox } from '../../components/checkbox';

import Tooth from './assets/Tooth';
import ToothDisabled from './assets/ToothDisabled';

export const checkboxConfigs: Record<string, StoryObj<typeof Checkbox>> = {
  default: {
    args: {
      id: 'checkbox-storybook-demo',
      label: 'Label',
      name: 'label',
      onChange: fn(),
      value: 'value',
    },
  },

  defaultHovered: {
    args: {
      id: 'checkbox-storybook-demo',
      label: 'Label',
      name: 'label',
      onChange: fn(),
      value: 'value',
    },
    parameters: {
      pseudo: { hover: true },
    },
  },

  bordered: {
    args: {
      id: 'checkbox-storybook-demo',
      label: 'Label',
      name: 'label',
      onChange: fn(),
      variant: 'bordered',
      value: 'value',
    },
  },

  borderedAndHovered: {
    args: {
      id: 'checkbox-storybook-demo',
      label: 'Label',
      name: 'label',
      onChange: fn(),
      variant: 'bordered',
      value: 'value',
    },
    parameters: {
      pseudo: { hover: true },
    },
  },

  borderedWide: {
    args: {
      id: 'checkbox-storybook-demo',
      label: 'Label',
      name: 'label',
      onChange: fn(),
      variant: 'borderedWide',
      value: 'value',
    },
  },

  disabledDefault: {
    args: {
      id: 'checkbox-storybook-demo',
      label: 'Label',
      name: 'label',
      disabled: true,
      onChange: fn(),
      value: 'value',
    },
  },

  disabledDefaultChecked: {
    args: {
      id: 'checkbox-storybook-demo',
      label: 'Label',
      name: 'label',
      checked: true,
      disabled: true,
      onChange: fn(),
      value: 'value',
    },
  },

  disabledBordered: {
    args: {
      id: 'checkbox-storybook-demo',
      label: 'Label',
      name: 'label',
      disabled: true,
      onChange: fn(),
      variant: 'bordered',
      value: 'value',
    },
  },

  disabledBorderedChecked: {
    args: {
      id: 'checkbox-storybook-demo',
      label: 'Label',
      name: 'label',
      checked: true,
      disabled: true,
      onChange: fn(),
      variant: 'bordered',
      value: 'value',
    },
  },

  disabledBorderedWide: {
    args: {
      id: 'checkbox-storybook-demo',
      label: 'Label',
      name: 'label',
      disabled: true,
      onChange: fn(),
      variant: 'borderedWide',
      value: 'value',
    },
  },

  disabledBorderedWideChecked: {
    args: {
      id: 'checkbox-storybook-demo',
      label: 'Label',
      name: 'label',
      checked: true,
      disabled: true,
      onChange: fn(),
      variant: 'borderedWide',
      value: 'value',
    },
  },

  icon: {
    args: {
      id: 'checkbox-storybook-demo',
      icon: <Tooth />,
      label: 'Label',
      name: 'label',
      onChange: fn(),
      variant: 'icon',
      value: 'value',
    },
  },

  iconHovered: {
    args: {
      id: 'checkbox-storybook-demo',
      icon: <Tooth />,
      label: 'Label',
      name: 'label',
      onChange: fn(),
      variant: 'icon',
      value: 'value',
    },
    parameters: {
      pseudo: { hover: true },
    },
  },

  iconDisabled: {
    args: {
      id: 'checkbox-storybook-demo',
      icon: <ToothDisabled />,
      label: 'Label',
      name: 'label',
      disabled: true,
      onChange: fn(),
      variant: 'icon',
      value: 'value',
    },
  },

  iconDisabledChecked: {
    args: {
      id: 'checkbox-storybook-demo',
      icon: <ToothDisabled />,
      label: 'Label',
      name: 'label',
      checked: true,
      disabled: true,
      onChange: fn(),
      variant: 'icon',
      value: 'value',
    },
  },
};
