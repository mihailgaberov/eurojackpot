import styled from "styled-components";
import plus from '../../assets/plus.svg';

export const Container = styled.div`
  display: flex;
  width: 96%;
  margin: 1em auto;

  @media only screen and (min-width: 920px) {
    width: 100%;
  }
`

export const StyledPlusSign = styled.div`
  width: 28px;
  height: 28px; 
  background: url(${plus}) center center no-repeat;
  background-size: 62%;
  opacity: 0.5;
`

export const RegularNumbersContainer = styled.div`
  display: flex;
`

export const EuroNumbersContainer = styled.div`
  display: flex;
`
