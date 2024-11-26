import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { CheckboxGroup } from '../../components/checkbox';

import {
  checkboxGroupConfigs,
  checkboxGroupErrorConfigs,
} from './checkboxGroupConfigs';

const meta: Meta<typeof CheckboxGroup> = {
  component: CheckboxGroup,
  decorators: [
    (Story: StoryFn) => (
      <div style={{ padding: '1rem', width: 'max-content' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

const {
  default: defaultStory,
  icon,
  autoGridOrientation,
  defaultOrientation,
  horizontalOrientation,
  verticalOrientation,
} = checkboxGroupConfigs;

const {
  defaultError,
  iconError,
  autoGridOrientationError,
  defaultOrientationError,
  horizontalOrientationError,
  verticalOrientationError,
} = checkboxGroupErrorConfigs;

// Default

export const Default: Story = defaultStory;

export const Icon: Story = icon;

export const AutoGridOrientation: Story = autoGridOrientation;

export const DefaultOrientation: Story = defaultOrientation;

export const HorizontalOrientation: Story = horizontalOrientation;

export const VerticalOrientation: Story = verticalOrientation;

// Error state

export const ErrorDefault: Story = defaultError;

export const ErrorIcon: Story = iconError;

export const ErrorAutoGridOrientation: Story = autoGridOrientationError;

export const ErrorDefaultOrientation: Story = defaultOrientationError;

export const ErrorHorizontalOrientation: Story = horizontalOrientationError;

export const ErrorVerticalOrientation: Story = verticalOrientationError;
