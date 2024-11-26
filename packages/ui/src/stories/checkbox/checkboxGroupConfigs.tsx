import { StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CheckboxGroup } from '../../components/checkbox';
import { CheckboxProps } from '../../components/checkbox/src/types';

import Tooth from './assets/Tooth';

const options: CheckboxProps[] = [
  {
    id: 'checkbox-storybook-demo',
    label: 'Label 1',
    name: 'label',
    onChange: fn(),
    value: 'value',
  },
  {
    id: 'checkbox-storybook-demo2',
    label: 'Label 2',
    name: 'label2',
    onChange: fn(),
    value: 'value',
  },
  {
    id: 'checkbox-storybook-demo3',
    label: 'Label 3',
    name: 'label3',
    onChange: fn(),
    value: 'value',
  },
];

export const checkboxGroupConfigs: Record<
  string,
  StoryObj<typeof CheckboxGroup>
> = {
  default: {
    args: {
      label: 'Checkbox Group',
      options,
    },
  },

  icon: {
    args: {
      label: 'Checkbox Group',
      options: [
        {
          ...options[0],
          icon: <Tooth />,
          variant: 'icon',
        },
        {
          ...options[1],
          icon: <Tooth />,
          variant: 'icon',
        },
        {
          ...options[2],
          icon: <Tooth />,
          variant: 'icon',
        },
      ],
    },
  },

  autoGridOrientation: {
    args: {
      label: 'Checkbox Group',
      options,
      orientation: 'auto-grid',
    },
  },

  defaultOrientation: {
    args: {
      label: 'Checkbox Group',
      options,
      orientation: 'default',
    },
  },

  horizontalOrientation: {
    args: {
      label: 'Checkbox Group',
      options,
      orientation: 'horizontal',
    },
  },

  verticalOrientation: {
    args: {
      label: 'Checkbox Group',
      options,
      orientation: 'vertical',
    },
  },
};

const error = {
  error: true,
  helperText: 'This is an error message',
};

export const checkboxGroupErrorConfigs: Record<
  string,
  StoryObj<typeof CheckboxGroup>
> = {
  defaultError: {
    args: {
      ...checkboxGroupConfigs.default.args,
      ...error,
    },
  },

  iconError: {
    args: {
      ...checkboxGroupConfigs.icon.args,
      ...error,
    },
  },

  autoGridOrientationError: {
    args: {
      ...checkboxGroupConfigs.autoGridOrientation.args,
      ...error,
    },
  },

  defaultOrientationError: {
    args: {
      ...checkboxGroupConfigs.defaultOrientation.args,
      ...error,
    },
  },

  horizontalOrientationError: {
    args: {
      ...checkboxGroupConfigs.horizontalOrientation.args,
      ...error,
    },
  },

  verticalOrientationError: {
    args: {
      ...checkboxGroupConfigs.verticalOrientation.args,
      ...error,
    },
  },
};
