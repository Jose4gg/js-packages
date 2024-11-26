import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { RadioButtonGroup } from '../../components/radio-button';

import {
  radioButtonGroupConfigs,
  radioButtonGroupErrorConfigs,
} from './radioButtonGroupConfigs';

const meta: Meta<typeof RadioButtonGroup> = {
  component: RadioButtonGroup,
  decorators: [
    (Story: StoryFn) => (
      <div style={{ padding: '1rem', width: 'max-content' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RadioButtonGroup>;

const {
  default: defaultStory,
  icon,
  autoGridOrientation,
  defaultOrientation,
  horizontalOrientation,
  verticalOrientation,
} = radioButtonGroupConfigs;

const {
  defaultError,
  iconError,
  autoGridOrientationError,
  defaultOrientationError,
  horizontalOrientationError,
  verticalOrientationError,
} = radioButtonGroupErrorConfigs;

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
