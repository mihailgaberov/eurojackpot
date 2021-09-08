import styled from "styled-components";

interface WinningNumberProps {
  borderColor: string;
}

export const Container = styled.div<WinningNumberProps>`
  border: 2px solid ${props => props.borderColor};
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`
