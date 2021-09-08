import React, { FunctionComponent } from 'react';
import { Container } from "./styles";

interface OddsRowProps {
  tier: string;
  match: string;
  winners: string;
  amount: string;
}

const OddsRow: FunctionComponent<OddsRowProps> = ({ tier, match, winners, amount }) => {
  return (
    <Container>
      <div>{tier}</div>
      <div>{match}</div>
      <div>{winners}</div>
      <div>{amount}</div>
    </Container>
  );
};

export default OddsRow;
