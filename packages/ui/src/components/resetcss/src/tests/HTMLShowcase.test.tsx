import { expect } from '@storybook/test';
import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import HTMLShowcase from '../HTMLShowcase';

describe('The HTMLShowcase renders', () => {
  test(`Renders the HTML show case properly`, () => {
    expect.assertions(1);

    render(<HTMLShowcase testId="simple-html-showcase" />);
    screen.getByTestId('simple-html-showcase');
  });
});
