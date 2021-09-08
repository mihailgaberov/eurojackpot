import React, { FunctionComponent } from 'react';
import { Container } from "./styles";

interface WinningNumberProps {
  value: number;
  borderColor: string;
}

const WinningNumber: FunctionComponent<WinningNumberProps> = ({value, borderColor}) => {
  return (
    <Container borderColor={borderColor}>
      {value}
    </Container>
  );
};

export default WinningNumber;
