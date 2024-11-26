import { StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { RadioButtonGroup } from '../../components/radio-button';

import Tooth from '../checkbox/assets/Tooth';

const options = [
  {
    id: 'radio-button-storybook-demo',
    label: 'Label 1',
    name: 'label',
    value: 'label1',
    onChange: fn(),
  },
  {
    id: 'radio-button-storybook-demo2',
    label: 'Label 2',
    name: 'label',
    value: 'label2',
    onChange: fn(),
  },
  {
    id: 'radio-button-storybook-demo3',
    label: 'Label 3',
    name: 'label',
    value: 'label3',
    onChange: fn(),
  },
  {
    id: 'radio-button-storybook-demo4',
    label: 'Label 4',
    name: 'label',
    value: 'label4',
    onChange: fn(),
  },
];

export const radioButtonGroupConfigs: Record<
  string,
  StoryObj<typeof RadioButtonGroup>
> = {
  default: {
    args: {
      label: 'RadioButton Group',
      options,
    },
  },

  icon: {
    args: {
      label: 'RadioButton Group',
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
      label: 'RadioButton Group',
      options,
      orientation: 'auto-grid',
    },
  },

  defaultOrientation: {
    args: {
      label: 'RadioButton Group',
      options,
      orientation: 'default',
    },
  },

  horizontalOrientation: {
    args: {
      label: 'RadioButton Group',
      options,
      orientation: 'horizontal',
    },
  },

  verticalOrientation: {
    args: {
      label: 'RadioButton Group',
      options,
      orientation: 'vertical',
    },
  },
};

const error = {
  error: true,
  helperText: 'This is an error message',
};

export const radioButtonGroupErrorConfigs: Record<
  string,
  StoryObj<typeof RadioButtonGroup>
> = {
  defaultError: {
    args: {
      ...radioButtonGroupConfigs.default.args,
      ...error,
    },
  },

  iconError: {
    args: {
      ...radioButtonGroupConfigs.icon.args,
      ...error,
    },
  },

  autoGridOrientationError: {
    args: {
      ...radioButtonGroupConfigs.autoGridOrientation.args,
      ...error,
    },
  },

  defaultOrientationError: {
    args: {
      ...radioButtonGroupConfigs.defaultOrientation.args,
      ...error,
    },
  },

  horizontalOrientationError: {
    args: {
      ...radioButtonGroupConfigs.horizontalOrientation.args,
      ...error,
    },
  },

  verticalOrientationError: {
    args: {
      ...radioButtonGroupConfigs.verticalOrientation.args,
      ...error,
    },
  },
};
