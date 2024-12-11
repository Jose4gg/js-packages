// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { TextInput } from '../../components';

import { storyConfigs } from './storyConfigs';

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  decorators: [
    (Story: StoryFn) => (
      <div style={{ padding: '1rem' }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

export type Story = StoryObj<typeof TextInput>;

const {
  base,
  baseWithValue,
  baseHovered,
  baseFocused,
  withPlaceholder,
  withPlaceholderAndFocus,
  withHelperText,
  withAction,
  withActionAndValue,
  withPlaceholderAndAction,
  withPlaceholderAndActionFocused,
  withPlaceholderAndHelperText,
  withPlaceholderAndHelperTextFocused,
  withPlaceholderAndHelperTextAndAction,
  withPlaceholderAndHelperTextAndActionFocused,
  withHelperTextAndAction,
  errorWithPlaceholder,
  errorWithAction,
  errorWithHelperText,
  errorWithHelperTextAndAction,
  errorWithPlaceholderAndAction,
  errorWithPlaceholderAndHelperText,
  error,
  errorWithPlaceholderAndHelperTextAndAction,
  errorWithLoading,
  errorWithActionLoading,
  errorWithPlaceholderAndHelperTextAndActionLoading,
  warning,
  warningWithHelperText,
  warningWithPlaceholderAndHelperText,
  warningWithPlaceholderAndAction,
  warningWithHelperTextAndAction,
  warningWithPlaceholderAndHelperTextAndAction,
  warningWithAction,
  warningWithPlaceholder,
  warningLoading,
  warningWithActionLoading,
  warningWithPlaceholderLoading,
  warningWithPlaceholderAndHelperTextAndActionLoading,
  disabled,
  disabledWithHelperText,
  disabledWithAction,
  disabledWithPlaceholderAndHelperTextAndAction,
  disabledWithPlaceholderAndAction,
  disabledWithPlaceholderAndHelperText,
  disabledWithHelperTextAndAction,
  disabledWithPlaceholder,
  disabledLoading,
  disabledWithActionLoading,
  disabledWithPlaceholderLoading,
  disabledWithPlaceholderAndHelperTextAndActionLoading,
  loading,
  loadingHovered,
  loadingFocused,
} = storyConfigs;

export const Base: Story = base;

export const BaseHovered: Story = baseHovered;

export const BaseFocused: Story = baseFocused;

export const BaseWithValue: Story = baseWithValue;

export const WithPlaceholder: Story = withPlaceholder;

export const WithPlaceholderAndFocus: Story = withPlaceholderAndFocus;

export const WithHelperText: Story = withHelperText;

export const WithAction: Story = withAction;

export const WithActionAndValue: Story = withActionAndValue;

export const WithPlaceholderAndHelperText: Story = withPlaceholderAndHelperText;

export const WithPlaceholderAndHelperTextFocused: Story = withPlaceholderAndHelperTextFocused;

export const WithPlaceholderAndAction: Story = withPlaceholderAndAction;

export const WithPlaceholderAndActionFocused: Story = withPlaceholderAndActionFocused;

export const WithHelperTextAndAction: Story = withHelperTextAndAction;

export const WithPlaceholderAndHelperTextAndAction: Story = withPlaceholderAndHelperTextAndAction;

export const WithPlaceholderAndHelperTextAndActionFocused: Story =
  withPlaceholderAndHelperTextAndActionFocused;

export const Loading: Story = loading;

export const LoadingHovered: Story = loadingHovered;

export const LoadingFocused: Story = loadingFocused;

export const Error: Story = error;

export const ErrorWithPlaceholder: Story = errorWithPlaceholder;

export const ErrorWithHelperText: Story = errorWithHelperText;

export const ErrorWithAction: Story = errorWithAction;

export const ErrorWithPlaceholderAndHelperText: Story = errorWithPlaceholderAndHelperText;

export const ErrorWithPlaceholderAndAction: Story = errorWithPlaceholderAndAction;

export const ErrorWithHelperTextAndAction: Story = errorWithHelperTextAndAction;

export const ErrorWithPlaceholderAndHelperTextAndAction: Story =
  errorWithPlaceholderAndHelperTextAndAction;

export const ErrorWithLoading: Story = errorWithLoading;

export const ErrorWithActionLoading: Story = errorWithActionLoading;

export const ErrorWithPlaceholderAndHelperTextAndActionLoading: Story =
  errorWithPlaceholderAndHelperTextAndActionLoading;

export const Warning: Story = warning;

export const WarningWithPlaceholder: Story = warningWithPlaceholder;

export const WarningWithHelperText: Story = warningWithHelperText;

export const WarningWithAction: Story = warningWithAction;

export const WarningWithPlaceholderAndHelperText: Story = warningWithPlaceholderAndHelperText;

export const WarningWithPlaceholderAndAction: Story = warningWithPlaceholderAndAction;

export const WarningWithHelperTextAndAction: Story = warningWithHelperTextAndAction;

export const WarningWithPlaceholderAndHelperTextAndAction: Story =
  warningWithPlaceholderAndHelperTextAndAction;

export const WarningLoading: Story = warningLoading;

export const WarningWithActionLoading: Story = warningWithActionLoading;

export const WarningWithPlaceholderLoading: Story = warningWithPlaceholderLoading;

export const WarningWithPlaceholderAndHelperTextAndActionLoading: Story =
  warningWithPlaceholderAndHelperTextAndActionLoading;

export const Disabled: Story = disabled;

export const DisabledWithPlaceholder: Story = disabledWithPlaceholder;

export const DisabledWithHelperText: Story = disabledWithHelperText;

export const DisabledWithAction: Story = disabledWithAction;

export const DisabledWithPlaceholderAndHelperText: Story = disabledWithPlaceholderAndHelperText;

export const DisabledWithPlaceholderAndAction: Story = disabledWithPlaceholderAndAction;

export const DisabledWithHelperTextAndAction: Story = disabledWithHelperTextAndAction;

export const DisabledWithPlaceholderAndHelperTextAndAction: Story =
  disabledWithPlaceholderAndHelperTextAndAction;

export const DisabledLoading: Story = disabledLoading;

export const DisabledWithActionLoading: Story = disabledWithActionLoading;

export const DisabledWithPlaceholderLoading: Story = disabledWithPlaceholderLoading;

export const DisabledWithPlaceholderAndHelperTextAndActionLoading: Story =
  disabledWithPlaceholderAndHelperTextAndActionLoading;
