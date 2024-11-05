import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { DataTable } from './DataTable';

describe('DataTable', () => {
  it('renders without crashing', () => {
    render(<DataTable />);
    // Add your test assertions here
    expect(true).toBeTruthy();
  });
});
