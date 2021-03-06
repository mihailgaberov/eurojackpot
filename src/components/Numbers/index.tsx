import React, { FunctionComponent } from 'react';
import { Container, EuroNumbersContainer, RegularNumbersContainer, StyledPlusSign } from "./styles";
import WinningNumber from "../WinningNumber";

interface NumbersProps {
  regularNumbers: number[];
  euroNumbers: number[];
}

const Numbers: FunctionComponent<NumbersProps> = ({ regularNumbers, euroNumbers }) => {
  return (
    <Container>
      <RegularNumbersContainer>
        {regularNumbers.map((num, idx) => {
          return <WinningNumber borderColor={'lightgrey'} key={idx} value={num} />
        })}
      </RegularNumbersContainer>
      <StyledPlusSign />
      <EuroNumbersContainer>
        {euroNumbers.map((num, idx) => {
          return <WinningNumber borderColor={'#ca7f26'} key={idx} value={num} />
        })}
      </EuroNumbersContainer>
    </Container>
  );
};

export default Numbers;
