import { StoryObj } from '@storybook/react';
import PercentageInput from '../../components/percentage-input';

const defaultArgs = {
  id: 'storybookDemo',
  name: 'percentage',
  label: 'Enter Percentage',
};

export const storyConfigs: Record<string, StoryObj<typeof PercentageInput>> = {
  base: {
    args: defaultArgs,
  },
  withInitialValue: {
    args: { ...defaultArgs, value: 85 },
  },
  withHelperText: {
    args: { ...defaultArgs, helperText: 'Helper Text' },
  },
  allowDecimalScale: {
    args: {
      ...defaultArgs,
      value: 85.1,
      decimalScale: 2,
      helperText: 'Decimal Scale: 2, it adds trailing 0s to match the scale',
      fixedDecimalScale: true,
    },
  },
  error: {
    args: { ...defaultArgs, value: 85, error: true },
  },
  errorWithHelperText: {
    args: {
      ...defaultArgs,
      value: 85,
      error: true,
      helperText: 'Helper Text',
    },
  },
  warning: {
    args: { ...defaultArgs, value: 85, warning: true },
  },
  warningWithHelperText: {
    args: {
      ...defaultArgs,
      value: 85,
      warning: true,
      helperText: 'Helper Text',
    },
  },
  disabled: {
    args: { ...defaultArgs, disabled: true },
  },
  disabledWidthValue: {
    args: { ...defaultArgs, value: 85, disabled: true },
  },
  disabledWithHelperText: {
    args: {
      ...defaultArgs,
      disabled: true,
      helperText: 'Helper Text',
    },
  },
};
