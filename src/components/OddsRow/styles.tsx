import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border: 1px solid lightgray;
  
  &:first-child {
    border-bottom: none;
  }
  
  &:last-child {
    border-top: none;
  }
`
