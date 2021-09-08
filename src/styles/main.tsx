import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 920px) {
    flex-direction: row;
  }
`
export const OddsContainer = styled.article`
  margin: 0 auto;
  width: 96%;

  @media only screen and (min-width: 920px) {
    margin-right: 1em;
    width: 100%;
  }
`

export const MessageCardsContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 96%;
  margin: 1em auto;
  
  @media only screen and (min-width: 920px) {
    width: 40%;
    margin: 0;
  }
`

