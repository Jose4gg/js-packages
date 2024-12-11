import { StoryObj } from '@storybook/react';

import Modal from '../../components/modal';

import ModalWithOpenButton from './ModalWithOpenButton';

const modalContent =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, ';

export const storyConfigs: Record<string, StoryObj<typeof Modal>> = {
  small: {
    args: {
      show: true,
      children: modalContent,
      size: 'sm',
    },
    parameters: {
      chromatic: { viewports: [320, 1600] },
    },
  },

  medium: {
    args: {
      show: true,
      children: modalContent,
      size: 'md',
    },
    parameters: {
      chromatic: { viewports: [320, 1600] },
    },
  },

  large: {
    args: {
      show: true,
      children: modalContent,
      size: 'lg',
    },
    parameters: {
      chromatic: { viewports: [320, 1600] },
    },
  },

  full: {
    args: {
      show: true,
      children: modalContent,
      size: 'full',
    },
    parameters: {
      chromatic: { viewports: [320, 1600] },
    },
  },

  withOpenButton: {
    render: () => <ModalWithOpenButton />,
    parameters: {
      chromatic: { viewports: [320, 1600] },
    },
  },
};
