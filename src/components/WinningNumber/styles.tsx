import styled from "styled-components";

interface WinningNumberProps {
  borderColor: string;
}

export const Container = styled.div<WinningNumberProps>`
  border: 1px solid ${props => props.borderColor};
  border-radius: 50%;
  width: 28px;
  height: 28px;
  margin-right: .3em;
  display: flex;
  align-items: center;
  justify-content: center;
`
