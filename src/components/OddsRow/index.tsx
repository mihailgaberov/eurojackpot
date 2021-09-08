import React, { FunctionComponent } from 'react';
import { Container } from "./styles";

interface OddsRowProps {
  tier: string | undefined;
  match: string | undefined;
  winners: string;
  amount: string;
  isTitle?: boolean;
}

const OddsRow: FunctionComponent<OddsRowProps> = ({ tier, match, winners, amount, isTitle= false }) => {
  return (
    <Container isTitle={isTitle}>
      <div>{tier}</div>
      <div>{match}</div>
      <div>{winners}{!isTitle? 'x' : ''}</div>
      <div>{amount}</div>
    </Container>
  );
};

export default OddsRow;
