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
  }

  @media only screen and (min-width: 800px) {
    flex-direction: row;
  }
`
