import React, { FunctionComponent } from 'react';
import { Container, MobileContainer } from "./styles";

interface OddsRowProps {
  tier: string | undefined;
  match: string | undefined;
  winners: string;
  amount: string;
  isTitle?: boolean;
  order: number;
}

const OddsRow: FunctionComponent<OddsRowProps> = ({ tier, match, winners, amount, isTitle = false, order }) => {
  return (
    <>
      <Container isTitle={isTitle}>
        <div>{tier}</div>
        <div>{match}</div>
        <div>{winners}{!isTitle ? 'x' : ''}</div>
        <div>{amount}</div>
      </Container>
      <MobileContainer isTitle={isTitle} isOdd={order % 2 !== 0}>
        <div>
          <div>Tier</div>
          <div>{tier}</div>
        </div>
        <div>
          <div>Match</div>
          <div>{match}</div>
        </div>
        <div>
          <div>Winners</div>
          <div>{winners}</div>
        </div>
        <div>
          <div>Amount</div>
          <div>{amount}</div>
        </div>
      </MobileContainer>
    </>
  );
};

export default OddsRow;
