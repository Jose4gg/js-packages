import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../../components/modal';

import { storyConfigs } from './storyConfigs';

const meta: Meta = {
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

const { small, medium, large, full, withOpenButton } = storyConfigs;

export const Small: Story = small;

export const Medium: Story = medium;

export const Large: Story = large;

export const Full: Story = full;

export const WithOpenButton: Story = withOpenButton;
