import React from 'react';
import { render, screen } from '@testing-library/react';

import Numbers from './index';


test('renders Numbers component correctly', () => {
  render(<Numbers regularNumbers={[1,2,3,4,5,6]} euroNumbers={[10, 20]} /> );
  const txtElement = screen.getByText(/3/i);
  expect(txtElement).toBeInTheDocument();
  const txtElement1 = screen.getByText(/4/i);
  expect(txtElement1).toBeInTheDocument();
  const txtElement3 = screen.getByText(/10/i);
  expect(txtElement3).toBeInTheDocument();
});
