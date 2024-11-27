import { composeStories } from '@storybook/react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import * as ModalStories from '@stories/modal/Modal.stories';
import * as AdpModalStories from '@stories/modal/adp/Modal.stories';
import * as UpwiseModalStories from '@stories/modal/upwise/Modal.stories';
import { testStoryLengths } from '@tests/shared-test-cases';

const { Small, WithOpenButton } = composeStories(ModalStories);

const defaultStoriesObj = composeStories(ModalStories);
const adpStoriesObj = composeStories(AdpModalStories);
const upwiseStoriesObj = composeStories(UpwiseModalStories);

testStoryLengths({ defaultStoriesObj, adpStoriesObj, upwiseStoriesObj });

describe('Modal component', () => {
  describe('Opened modal', () => {
    beforeEach(() => {
      render(<Small />);
    });

    it('renders children when show is true', () => {
      expect(screen.getByText(/Lorem Ipsum/)).toBeInTheDocument();
    });

    it('renders close button', () => {
      const closeButton = screen.getByRole('button', { name: 'Close modal' });
      expect(closeButton).toBeInTheDocument();
    });
  });

  describe('Modal with open button', () => {
    beforeEach(() => {
      render(<WithOpenButton />);
    });

    it('renders open button', () => {
      expect(screen.getByRole('button', { name: 'Open modal' })).toBeInTheDocument();
    });

    it('show modal when open button is clicked and closes modal when close button is clicked', async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Open modal' }));
      await waitFor(() => expect(screen.getByText(/Lorem Ipsum/)).toBeInTheDocument());
      fireEvent.click(screen.getByRole('button', { name: 'Close modal' }));
      await waitFor(() => expect(screen.queryByText('Lorem Ipsum')).not.toBeInTheDocument());
    });

    it('set focus to focuseable elements in the modal', async () => {
      const openButton = screen.getByRole('button', { name: 'Open modal' });
      fireEvent.click(openButton);
      await waitFor(() =>
        expect(screen.getByRole('button', { name: 'Close modal' })).toHaveFocus(),
      );
    });

    it('set focus back to previously focused element on close', async () => {
      const previousFocus = document.activeElement;
      fireEvent.click(screen.getByRole('button', { name: 'Open modal' }));
      await waitFor(() =>
        expect(screen.getByRole('button', { name: 'Close modal' })).toHaveFocus(),
      );
      fireEvent.click(screen.getByRole('button', { name: 'Close modal' }));
      await waitFor(() => expect(previousFocus).toHaveFocus());
    });
  });
});
