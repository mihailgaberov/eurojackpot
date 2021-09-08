import React from 'react';
import { render, screen } from '@testing-library/react';

import WinningNumber from './index';


test('renders primary MessageCard component correctly', () => {
  render(<WinningNumber value={7} borderColor={'orange'} /> );
  const txtElement = screen.getByText(/7/i);
  expect(txtElement).toBeInTheDocument();
});
