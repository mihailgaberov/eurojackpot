import styled from "styled-components";

interface ContainerProps {
  isTitle: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
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
`
