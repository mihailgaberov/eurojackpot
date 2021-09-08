import React, { FunctionComponent } from 'react';
import { Container } from "./styles";

interface OddsRowProps {
  tier: string;
  match: string;
  winners: string;
  amount: string;
  isTitle?: boolean;
}

const OddsRow: FunctionComponent<OddsRowProps> = ({ tier, match, winners, amount, isTitle= false }) => {
  return (
    <Container isTitle={isTitle}>
      <div>{tier}</div>
      <div>{match}</div>
      <div>{winners}</div>
      <div>{amount}</div>
    </Container>
  );
};

export default OddsRow;
