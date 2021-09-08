import React from 'react';
import { render, screen } from '@testing-library/react';

import MessageCard from './index';


test('renders primary MessageCard component correctly', () => {
  render(<MessageCard isPrimary={true} closingDate={'03.09.2021'} drawNumber={496} /> );
  const txtElement = screen.getByText(/The EuroJackpot numbers for 03.09.2021/i);
  expect(txtElement).toBeInTheDocument();
  const txtElement1 = screen.getByText(/496/i);
  expect(txtElement1).toBeInTheDocument();
});

test('renders not primary MessageCard component correctly', () => {
  render(<MessageCard isPrimary={false} closingDate={'03.09.2021'} /> );
  const txtElement = screen.getByText(/Lottoland published the draw results immediately after the draw on 03.09.2021./i);
  expect(txtElement).toBeInTheDocument();
});