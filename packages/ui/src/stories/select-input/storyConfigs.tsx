import { StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { SelectInput } from '../../components';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'orange', label: 'Orange' },
  { value: 'banana', label: 'Banana' },
];

export const storyConfigs: Record<string, StoryObj<typeof SelectInput>> = {
  default: {
    args: {
      id: 'select-id',
      name: 'Fruit',
      label: 'Select a fruit',
      onChange: fn(),
      options,
    },
  },

  withHelperText: {
    args: {
      id: 'select-id',
      name: 'Fruit',
      label: 'Select a fruit',
      onChange: fn(),
      options,
      helperText: 'Helper Text',
    },
  },

  error: {
    args: {
      id: 'select-id',
      name: 'Fruit',
      label: 'Select a fruit',
      onChange: fn(),
      options,
      error: true,
    },
  },

  errorWithHelperText: {
    args: {
      id: 'select-id',
      name: 'Fruit',
      label: 'Select a fruit',
      onChange: fn(),
      options,
      error: true,
      helperText: 'Helper Text',
    },
  },

  warning: {
    args: {
      id: 'select-id',
      name: 'Fruit',
      label: 'Select a fruit',
      onChange: fn(),
      options,
      warning: true,
    },
  },

  warningWithHelperText: {
    args: {
      id: 'select-id',
      name: 'Fruit',
      label: 'Select a fruit',
      onChange: fn(),
      options,
      warning: true,
      helperText: 'Helper Text',
    },
  },

  disabled: {
    args: {
      id: 'select-id',
      name: 'Fruit',
      label: 'Select a fruit',
      onChange: fn(),
      options,
      isDisabled: true,
      value: { value: 'apple', label: 'Apple' },
    },
  },

  disabledWithHelperText: {
    args: {
      id: 'select-id',
      name: 'Fruit',
      label: 'Select a fruit',
      onChange: fn(),
      options,
      isDisabled: true,
      helperText: 'Helper Text',
      value: { value: 'apple', label: 'Apple' },
    },
  },

  multiSelect: {
    args: {
      id: 'select-id',
      name: 'Fruit',
      label: 'Select a fruit',
      onChange: fn(),
      options,
      isMulti: true,
    },
  },
};
