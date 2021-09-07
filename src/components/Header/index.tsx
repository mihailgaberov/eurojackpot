import React, { FunctionComponent } from 'react';
import { Container, SelectsContainer } from "./styles";

const Header: FunctionComponent = () => {
  return (
    <Container>
      <h1>EUROJACKPOT RESULTS & WINNING NUMBERS</h1>
      <SelectsContainer>
        <select name="date">
          <option>Fri 03 Sep</option>
        </select>
        <select name="year">
          <option>2021</option>
        </select>
      </SelectsContainer>
    </Container>
  );
};

export default Header;
