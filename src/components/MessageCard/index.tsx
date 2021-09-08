import React, { FunctionComponent } from 'react';
import { Container } from "./styles";

const MessageCard: FunctionComponent = () => {
  return (
    <Container>
      <h2>The EuroJackpot numbers for 03.09.2021</h2>
      <p>
        The 494th draw for the EuroJackpot was held on 03.09.2021, as usual at 9pm in Helsinki.
      </p>
    </Container>
  );
};

export default MessageCard;