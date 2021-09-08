import React from 'react';
import { render, screen } from '@testing-library/react';

import TitleRow from './index';

test('renders TitleRow component correctly', () => {
  render(<TitleRow date={'03.09.2021'} /> );
  const txtElement = screen.getByText(/EuroJackpot/i);
  expect(txtElement).toBeInTheDocument();
  const txtElement1 = screen.getByText(/Results for/i);
  expect(txtElement1).toBeInTheDocument();
});
