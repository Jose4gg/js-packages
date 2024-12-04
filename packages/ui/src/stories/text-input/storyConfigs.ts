import { StoryObj } from '@storybook/react';
import TextInput from '@components/text-input';

const defaultArgs = {
  id: 'storybookDemo',
  name: 'First Name',
  label: 'First Name',
};

export const storyConfigs: Record<string, StoryObj<typeof TextInput>> = {
  base: {
    args: { ...defaultArgs },
  },
  baseWithValue: {
    args: {
      ...defaultArgs,
      value: 'This is a value',
    },
  },
  baseHovered: {
    args: {
      ...defaultArgs,
    },
    parameters: {
      pseudo: { hover: true },
    },
  },
  baseFocused: {
    args: {
      ...defaultArgs,
    },
    parameters: {
      pseudo: { focus: true },
    },
  },
  withPlaceholder: {
    args: {
      ...defaultArgs,
      placeholder: 'Placeholder',
    },
  },
  withPlaceholderAndFocus: {
    args: {
      ...defaultArgs,
      placeholder: 'Placeholder',
    },
    parameters: {
      pseudo: { focus: true },
    },
  },
  withHelperText: {
    args: {
      ...defaultArgs,
      helperText: 'Helper Text',
    },
  },
  withAction: {
    args: {
      ...defaultArgs,
      actionText: 'Action',
      onAction: () => {},
    },
  },
  withActionAndValue: {
    args: {
      ...defaultArgs,
      value:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      actionText: 'Action',
      onAction: () => {},
    },
  },
  withPlaceholderAndHelperText: {
    args: {
      ...defaultArgs,
      placeholder: 'Placeholder',
      helperText: 'Helper Text',
    },
  },
  withPlaceholderAndHelperTextFocused: {
    args: {
      ...defaultArgs,
      placeholder: 'Placeholder',
      helperText: 'Helper Text',
    },
    parameters: {
      pseudo: { focus: true },
    },
  },
  withPlaceholderAndAction: {
    args: {
      ...defaultArgs,
      placeholder: 'Placeholder',
      actionText: 'Action',
      onAction: () => {},
    },
  },
  withPlaceholderAndActionFocused: {
    args: {
      ...defaultArgs,
      placeholder: 'Placeholder',
      actionText: 'Action',
      onAction: () => {},
    },
  },
  withHelperTextAndAction: {
    args: {
      ...defaultArgs,
      helperText: 'Helper Text',
      actionText: 'Action',
      onAction: () => {},
    },
  },
  withPlaceholderAndHelperTextAndAction: {
    args: {
      ...defaultArgs,
      placeholder: 'Placeholder',
      helperText: 'Helper Text',
      actionText: 'Action',
      onAction: () => {},
    },
  },
  withPlaceholderAndHelperTextAndActionFocused: {
    args: {
      ...defaultArgs,
      placeholder: 'Placeholder',
      helperText: 'Helper Text',
      actionText: 'Action',
      onAction: () => {},
    },
    parameters: {
      pseudo: { focus: true },
    },
  },
  loading: {
    args: {
      ...defaultArgs,
      loading: true,
    },
  },
  loadingHovered: {
    args: {
      ...defaultArgs,
      loading: true,
    },
    parameters: {
      pseudo: { hover: true },
    },
  },
  loadingFocused: {
    args: {
      ...defaultArgs,
      loading: true,
    },
    parameters: {
      pseudo: { focus: true },
    },
  },
  error: {
    args: {
      ...defaultArgs,
      error: true,
    },
  },
  errorWithPlaceholder: {
    args: {
      ...defaultArgs,
      placeholder: 'Placeholder',
      error: true,
    },
    parameters: {
      pseudo: { focus: true },
    },
  },
  errorWithHelperText: {
    args: {
      ...defaultArgs,
      helperText: 'Helper Text',
      error: true,
    },
  },
  errorWithAction: {
    args: {
      ...defaultArgs,
      actionText: 'Action',
      onAction: () => {},
      error: true,
    },
  },
  errorWithPlaceholderAndHelperText: {
    args: {
      ...defaultArgs,
      placeholder: 'Placeholder',
      helperText: 'Helper Text',
      error: true,
    },
    parameters: {
      pseudo: { focus: true },
    },
  },
  errorWithPlaceholderAndAction: {
    args: {
      ...defaultArgs,
      placeholder: 'Placeholder',
      actionText: 'Action',
      onAction: () => {},
      error: true,
    },
    parameters: {
      pseudo: { focus: true },
    },
  },
  errorWithHelperTextAndAction: {
    args: {
      ...defaultArgs,
      helperText: 'Helper Text',
      actionText: 'Action',
      onAction: () => {},
      error: true,
    },
  },
  errorWithPlaceholderAndHelperTextAndAction: {
    args: {
      ...defaultArgs,
      placeholder: 'Placeholder',
      helperText: 'Helper Text',
      actionText: 'Action',
      onAction: () => {},
      error: true,
    },
    parameters: {
      pseudo: { focus: true },
    },
  },
  errorWithLoading: {
    args: {
      ...defaultArgs,
      loading: true,
      error: true,
    },
  },
  errorWithActionLoading: {
    args: {
      ...defaultArgs,
      actionText: 'Action',
      onAction: () => {},
      error: true,
      loading: true,
    },
  },
  errorWithPlaceholderAndHelperTextAndActionLoading: {
    args: {
      ...defaultArgs,
      placeholder: 'Placeholder',
      helperText: 'Helper Text',
      actionText: 'Action',
      onAction: () => {},
      error: true,
      loading: true,
    },
    parameters: {
      pseudo: { focus: true },
    },
  },
  warning: {
    args: {
      ...defaultArgs,
      warning: true,
    },
  },
  warningWithPlaceholder: {
    args: {
      ...defaultArgs,
      placeholder: 'Placeholder',
      warning: true,
    },
    parameters: {
      pseudo: { focus: true },
    },
  },
  warningWithHelperText: {
    args: {
      ...defaultArgs,
      helperText: 'Helper Text',
      warning: true,
    },
  },
  warningWithAction: {
    args: {
      ...defaultArgs,
      actionText: 'Action',
      onAction: () => {},
      warning: true,
    },
  },
  warningWithPlaceholderAndHelperText: {
    args: {
      ...defaultArgs,
      placeholder: 'Placeholder',
      helperText: 'Helper Text',
      warning: true,
    },
    parameters: {
      pseudo: { focus: true },
    },
  },
  warningWithPlaceholderAndAction: {
    args: {
      ...defaultArgs,
      placeholder: 'Placeholder',
      actionText: 'Action',
      onAction: () => {},
      warning: true,
    },
    parameters: {
      pseudo: { focus: true },
    },
  },
  warningWithHelperTextAndAction: {
    args: {
      ...defaultArgs,
      helperText: 'Helper Text',
      actionText: 'Action',
      onAction: () => {},
      warning: true,
    },
  },
  warningWithPlaceholderAndHelperTextAndAction: {
    args: {
      ...defaultArgs,
      placeholder: 'Placeholder',
      helperText: 'Helper Text',
      actionText: 'Action',
      onAction: () => {},
      warning: true,
    },
    parameters: {
      pseudo: { focus: true },
    },
  },
  warningLoading: {
    args: {
      ...defaultArgs,
      loading: true,
      warning: true,
    },
  },
  warningWithActionLoading: {
    args: {
      ...defaultArgs,
      actionText: 'Action',
      onAction: () => {},
      warning: true,
      loading: true,
    },
  },
  warningWithPlaceholderLoading: {
    args: {
      ...defaultArgs,
      placeholder: 'Placeholder',
      warning: true,
      loading: true,
    },
    parameters: {
      pseudo: { focus: true },
    },
  },
  warningWithPlaceholderAndHelperTextAndActionLoading: {
    args: {
      ...defaultArgs,
      placeholder: 'Placeholder',
      helperText: 'Helper Text',
      actionText: 'Action',
      onAction: () => {},
      warning: true,
      loading: true,
    },
    parameters: {
      pseudo: { focus: true },
    },
  },
  disabled: {
    args: {
      ...defaultArgs,
      disabled: true,
    },
  },
  disabledWithPlaceholder: {
    args: {
      ...defaultArgs,
      placeholder: 'Placeholder',
      disabled: true,
    },
    parameters: {
      pseudo: { focus: true },
    },
  },
  disabledWithHelperText: {
    args: {
      ...defaultArgs,
      helperText: 'Helper Text',
      disabled: true,
    },
  },
  disabledWithAction: {
    args: {
      ...defaultArgs,
      actionText: 'Action',
      onAction: () => {},
      disabled: true,
    },
  },
  disabledWithPlaceholderAndHelperText: {
    args: {
      ...defaultArgs,
      placeholder: 'Placeholder',
      helperText: 'Helper Text',
      disabled: true,
    },
    parameters: {
      pseudo: { focus: true },
    },
  },
  disabledWithPlaceholderAndAction: {
    args: {
      ...defaultArgs,
      placeholder: 'Placeholder',
      actionText: 'Action',
      onAction: () => {},
      disabled: true,
    },
    parameters: {
      pseudo: { focus: true },
    },
  },
  disabledWithHelperTextAndAction: {
    args: {
      ...defaultArgs,
      helperText: 'Helper Text',
      actionText: 'Action',
      onAction: () => {},
      disabled: true,
    },
  },
  disabledWithPlaceholderAndHelperTextAndAction: {
    args: {
      ...defaultArgs,
      placeholder: 'Placeholder',
      helperText: 'Helper Text',
      actionText: 'Action',
      onAction: () => {},
      disabled: true,
    },
    parameters: {
      pseudo: { focus: true },
    },
  },
  disabledLoading: {
    args: {
      ...defaultArgs,
      loading: true,
      disabled: true,
    },
  },
  disabledWithActionLoading: {
    args: {
      ...defaultArgs,
      actionText: 'Action',
      onAction: () => {},
      loading: true,
      disabled: true,
    },
  },
  disabledWithPlaceholderLoading: {
    args: {
      ...defaultArgs,
      placeholder: 'Placeholder',
      loading: true,
      disabled: true,
    },
    parameters: {
      pseudo: { focus: true },
    },
  },
  disabledWithPlaceholderAndHelperTextAndActionLoading: {
    args: {
      ...defaultArgs,
      placeholder: 'Placeholder',
      helperText: 'Helper Text',
      actionText: 'Action',
      onAction: () => {},
      disabled: true,
      loading: true,
    },
    parameters: {
      pseudo: { focus: true },
    },
  },
};
