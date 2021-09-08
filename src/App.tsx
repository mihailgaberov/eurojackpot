import React, { useEffect, useState } from 'react';

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import TitleRow from "./components/TitleRow";
import Numbers from "./components/Numbers";
import OddsRow from "./components/OddsRow";
import { MainContainer, MessageCardsContainer, OddsContainer } from "./styles/main";
import MessageCard from "./components/MessageCard";
import {
  formatCurrency,
  formatNumber,
  getClosingDate,
  JackpotData,
  mapArabicToRomanNumbers, mapMatchesToIndexes,
  sortOddsByPrize
} from "./helpers";


function App() {
  const [data, setData] = useState<JackpotData>();

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
        <TitleRow date={data?.last.date.full} />
        <Numbers regularNumbers={data?.last.numbers} euroNumbers={data?.last.euroNumbers} />
        <MainContainer>
          <OddsContainer>
            <OddsRow tier='Tier' match='Match' winners='Winners' amount='Amount' isTitle={true} />
            {sortOddsByPrize(Object.values(data?.last.odds)).map((odd, idx) => {
              if (odd.prize === 0) {
                return '';
              }

              return <OddsRow key={idx}
                              tier={mapArabicToRomanNumbers.get(String(idx + 1))}
                              match={mapMatchesToIndexes.get(String(idx + 1))}
                              winners={formatNumber(odd.winners).toString()}
                              amount={formatCurrency(odd.prize).toString()} />
            })}
          </OddsContainer>
          <MessageCardsContainer>
            <MessageCard closingDate={getClosingDate(data)} isPrimary={true} />
            <MessageCard closingDate={getClosingDate(data)} isPrimary={false} />
          </MessageCardsContainer>
        </MainContainer>
      </>}
    </>
  );
}

export default App;
