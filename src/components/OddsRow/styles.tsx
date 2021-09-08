import styled from "styled-components";

interface ContainerProps {
  isTitle: boolean;
  isOdd?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: none;
  justify-content: space-between;
  align-items: center;
  height: ${props => props.isTitle ? '2.5em' : '3.5em'};
  border: 1px solid lightgray;
  padding: 0 1em;
  
  div {
    width: 25%;
  }
  
  &:first-child {
    border-bottom: none;
  }
  
  &:last-child {
    border-top: none;
  }

  @media only screen and (min-width: 920px) {
    display: flex;
  }
`

export const MobileContainer = styled.div<ContainerProps>`
  display: ${props => props.isTitle ? 'none' : 'flex'};
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  border: 1px solid lightgray;
  border-bottom: none;
  padding: 0 1em;
  background-color: ${props => props.isOdd ? '#f9f9f9' : 'white'};

  &:last-child {
    border-bottom: 1px solid lightgrey;
  }
  
  div {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    line-height: 2em;
    
    div {
      justify-content: start;
    }
  }

  @media only screen and (min-width: 920px) {
    display: none;
  }
`