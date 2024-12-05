import { StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Autocomplete from '@components/autocomplete';

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'fig', label: 'Fig' },
  { value: 'grape', label: 'Grape' },
  { value: 'honeydew', label: 'Honeydew' },
  { value: 'kiwi', label: 'Kiwi' },
  { value: 'lemon', label: 'Lemon' },
  { value: 'mango', label: 'Mango' },
  { value: 'nectarine', label: 'Nectarine' },
  { value: 'orange', label: 'Orange' },
  { value: 'papaya', label: 'Papaya' },
  { value: 'quince', label: 'Quince' },
  { value: 'raspberry', label: 'Raspberry' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'tangerine', label: 'Tangerine' },
  { value: 'ugli fruit', label: 'Ugli Fruit' },
  { value: 'watermelon', label: 'Watermelon' },
];

const searchFn = async (inputValue: string) => {
  return new Promise<typeof fruits>((resolve) => {
    setTimeout(() => {
      const filteredFruits = fruits.filter((fruit) =>
        fruit.label.toLowerCase().includes(inputValue.toLowerCase()),
      );
      return resolve(filteredFruits);
    }, 500);
  });
};

export const storyConfigs: Record<string, StoryObj<typeof Autocomplete>> = {
  default: {
    args: {
      id: 'autocomplete-id',
      name: 'Fruit',
      placeholder: 'Search a fruit',
      onChange: fn(),
      searchFn,
      testId: 'autocomplete-test-id',
    },
  },

  withHelperText: {
    args: {
      id: 'autocomplete-id',
      name: 'Fruit',
      placeholder: 'Search a fruit',
      onChange: fn(),
      searchFn,
      helperText: 'Helper Text',
      testId: 'autocomplete-test-id',
    },
  },

  error: {
    args: {
      id: 'autocomplete-id',
      name: 'Fruit',
      placeholder: 'Search a fruit',
      onChange: fn(),
      searchFn,
      error: true,
      testId: 'autocomplete-test-id',
    },
  },

  errorWithHelperText: {
    args: {
      id: 'autocomplete-id',
      name: 'Fruit',
      placeholder: 'Search a fruit',
      onChange: fn(),
      searchFn,
      error: true,
      helperText: 'Helper Text',
      testId: 'autocomplete-test-id',
    },
  },

  warning: {
    args: {
      id: 'autocomplete-id',
      name: 'Fruit',
      placeholder: 'Search a fruit',
      onChange: fn(),
      searchFn,
      warning: true,
      testId: 'autocomplete-test-id',
    },
  },

  warningWithHelperText: {
    args: {
      id: 'autocomplete-id',
      name: 'Fruit',
      placeholder: 'Search a fruit',
      onChange: fn(),
      searchFn,
      warning: true,
      helperText: 'Helper Text',
      testId: 'autocomplete-test-id',
    },
  },

  disabled: {
    args: {
      id: 'autocomplete-id',
      name: 'Fruit',
      placeholder: 'Search a fruit',
      onChange: fn(),
      searchFn,
      isDisabled: true,
      testId: 'autocomplete-test-id',
      value: { value: 'apple', label: 'Apple' },
    },
  },

  disabledWithHelperText: {
    args: {
      id: 'autocomplete-id',
      name: 'Fruit',
      placeholder: 'Search a fruit',
      onChange: fn(),
      searchFn,
      isDisabled: true,
      helperText: 'Helper Text',
      testId: 'autocomplete-test-id',
      value: { value: 'apple', label: 'Apple' },
    },
  },

  multiSearch: {
    args: {
      id: 'autocomplete-id',
      name: 'Fruit',
      placeholder: 'Search a fruit',
      onChange: fn(),
      searchFn,
      isMulti: true,
      testId: 'autocomplete-test-id',
    },
  },
};
