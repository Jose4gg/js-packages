import { StoryObj } from '@storybook/react';
import NumberInput from '../../components/number-input';

const defaultArgs = {
  id: 'storybookDemo',
  name: 'Input Number',
  label: 'Input Number',
};

export const storyConfigs: Record<string, StoryObj<typeof NumberInput>> = {
  base: {
    args: defaultArgs,
  },
  withInitialValue: {
    args: { ...defaultArgs, value: 123 },
  },
  withHelperText: {
    args: { ...defaultArgs, helperText: 'Helper Text' },
  },
  allowLeadingZeros: {
    args: { ...defaultArgs, allowLeadingZeros: true, value: '000123' },
  },
  allowNegativeValues: {
    args: { ...defaultArgs, allowNegative: true, value: -123 },
  },
  allowDecimalSeparators: {
    args: {
      ...defaultArgs,
      value: 123.45,
    },
  },
  allowDecimalScale: {
    args: {
      ...defaultArgs,
      value: 123.1,
      decimalScale: 3,
      helperText: 'Decimal Scale: 3, it adds trailing 0s to match the scale',
      fixedDecimalScale: true,
    },
  },
  allowThousandSeparator: {
    args: {
      ...defaultArgs,
      value: 1234567,
      thousandSeparator: true,
    },
  },
  withPrefix: {
    args: { ...defaultArgs, value: 123, prefix: '$' },
  },
  withSuffix: {
    args: { ...defaultArgs, value: 123, suffix: '/month' },
  },
  error: {
    args: { ...defaultArgs, value: 123, error: true },
  },
  errorWithHelperText: {
    args: {
      ...defaultArgs,
      value: 123,
      error: true,
      helperText: 'Helper Text',
    },
  },
  warning: {
    args: { ...defaultArgs, value: 123, warning: true },
  },
  warningWithHelperText: {
    args: {
      ...defaultArgs,
      value: 123,
      warning: true,
      helperText: 'Helper Text',
    },
  },
  disabled: {
    args: { ...defaultArgs, disabled: true },
  },
  disabledWidthValue: {
    args: { ...defaultArgs, value: 123, disabled: true },
  },
  disabledWithHelperText: {
    args: {
      ...defaultArgs,
      disabled: true,
      helperText: 'Helper Text',
    },
  },
};
