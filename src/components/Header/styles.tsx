import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  color: #98a6af;
  padding: .6em;
  border-bottom: 1px solid #d9deda;
  
  h1 {
    color: #012406;
    font-weight: 900;
    font-size: 1.1em;
    line-height: 1.2em;
    -webkit-font-smoothing: antialiased;
    margin: 1em 0;
  }

  @media only screen and (min-width: 920px) {
    flex-direction: row;
    font-size: 1.2em;
    line-height: 1.3em;
  }
`

export const SelectsContainer = styled.div`
  display: flex;
  width: 12.5em;
  justify-content: space-between;
  
  select {
    font-size: 1.2em;
    padding: .3em;
    border-radius: 3px;
    border: 1px solid #d9deda;
    color: #012406;
  }
`
