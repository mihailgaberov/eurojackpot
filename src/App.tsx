import React from 'react';

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import TitleRow from "./components/TitleRow";
import Numbers from "./components/Numbers";
import OddsRow from "./components/OddsRow";
import { MainContainer, MessageCardsContainer, OddsContainer } from "./styles/main";
import MessageCard from "./components/MessageCard";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TitleRow date={'Friday 03 Sep 2021'} />
      <Numbers regularNumbers={[
        5,
        9,
        20,
        44,
        48
      ]} euroNumbers={[4, 10]} />
      <MainContainer>
        <OddsContainer>
          <OddsRow tier={'Tier'} match={'Match'} winners={'Winners'} amount={'Amount'} isTitle={true} />
          {Object.values({
            "rank0": {
              "winners": 0,
              "specialPrize": 0,
              "prize": 0
            },
            "rank1": {
              "winners": 0,
              "specialPrize": 0,
              "prize": 3500000000
            }
          }).map((odd, idx) => {
            return <OddsRow key={idx}
                            tier={'I'}
                            match={'5 Numbers + 2 Euronumbers'}
                            winners={'0x'}
                            amount={odd.prize.toString()} />
          })}
        </OddsContainer>
        <MessageCardsContainer>
          <MessageCard />
          <MessageCard />
        </MessageCardsContainer>
      </MainContainer>
    </>
  );
}

export default App;
