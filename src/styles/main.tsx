import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 920px) {
    flex-direction: row;
  }
`
export const OddsContainer = styled.article`
  width: 100%;

  @media only screen and (min-width: 920px) {
    width: 70%;
  }
`

export const MessageCardsContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1em;
  
  @media only screen and (min-width: 920px) {
    width: 30%;
    margin: 0;
  }
`

