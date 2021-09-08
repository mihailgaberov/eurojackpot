import React from 'react';
import { render, screen } from '@testing-library/react';

import OddsRow from './index';
import { mapMatchesToIndexes } from "../../helpers";


test('renders primary OddsRow component correctly', () => {
  render(<OddsRow order={1} amount={'33000'} match={mapMatchesToIndexes.get('1')} isTitle={true} tier='I' winners={'22'} /> );
  const tierElement = screen.getByText(/Tier/i);
  expect(tierElement).toBeInTheDocument();
  const winnersElement = screen.getByText(/Winners/i);
  expect(winnersElement).toBeInTheDocument();
  const matchElement = screen.getByText(/Match/i);
  expect(matchElement).toBeInTheDocument();
});
