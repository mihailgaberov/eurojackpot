import React, { FunctionComponent } from 'react';
import { Container } from "./styles";

interface MessageCardProps {
  closingDate: string;
  isPrimary: boolean;
  drawNumber?: number;
}

const MessageCard: FunctionComponent<MessageCardProps> = ({ closingDate, isPrimary, drawNumber }) => {
  return (
    <Container>
      <h2>The EuroJackpot numbers for {closingDate}</h2>
      {isPrimary && <p>
        <strong>The {drawNumber}th draw for the EuroJackpot was held on {closingDate}</strong>, as usual at 9pm in
        Helsinki.
      </p>}

      {!isPrimary && <p>
        The balls used for the draw are made of a synthetic polymer, softer than ping-pong balls. The results are
        broadcast after the draw, with the draw-machines independently checked by the VTT Technical Research Center of
        Finland.
      </p>}
      {!isPrimary && <p>
        Lottoland published the draw results immediately after the draw on {closingDate}.
      </p>}
    </Container>
  );
};

export default MessageCard;