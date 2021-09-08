import React, { useEffect, useState } from 'react';

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import TitleRow from "./components/TitleRow";
import Numbers from "./components/Numbers";
import OddsRow from "./components/OddsRow";
import { MainContainer, MessageCardsContainer, OddsContainer } from "./styles/main";
import MessageCard from "./components/MessageCard";
import { mapArabicToRomanNumbers } from "./helpers";

interface JackpotData {
  last: {
    date: {
      full: string;
    },
    numbers: number[];
    euroNumbers: number[];
    odds: {
    rank: {
      winners: number;
      specialPrize: number;
      prize: number;
    }
    }
  };
  next: {};
}

function App() {
  const [data, setData] = useState<JackpotData>();

  console.log('>>> data: ', data)

  useEffect(() => {
    const getData = () => {
      fetch('data.json', {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      ).then((response) => {
        return response.json();
      })
        .then((responseJson) => {
          setData(responseJson);
        });
    }

    getData();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      {data && <>
        <TitleRow date={data.last.date.full} />
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
            {Object.values(data.last.odds).map((odd, idx) => {
              if (idx !== 0) {
                return <OddsRow key={idx}
                                tier={mapArabicToRomanNumbers.get(String(idx))}
                                match={'5 Numbers + 2 Euronumbers'}
                                winners={'0x'}
                                amount={odd.prize.toString()} />
              }
            })}
          </OddsContainer>
          <MessageCardsContainer>
            <MessageCard />
            <MessageCard />
          </MessageCardsContainer>
        </MainContainer>
      </>}
    </>
  );
}

export default App;
