import React, { FunctionComponent } from 'react';
import { Container } from "./styles";

interface TitleRowProps {
  date: string;
}

const TitleRow: FunctionComponent<TitleRowProps> = ({ date }) => {
  return (
    <Container>
      <span>EuroJackpot</span> Results for {date}
    </Container>
  );
};

export default TitleRow
