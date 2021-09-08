import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders select inputs for date and year', () => {
  render(<App />);
  const dateElement = screen.getByText(/Fri 03 Sep/i);
  expect(dateElement).toBeInTheDocument();
  const yearElement = screen.getByText(/2021/i);
  expect(yearElement).toBeInTheDocument();
});
