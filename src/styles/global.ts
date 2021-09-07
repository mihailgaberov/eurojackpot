import { createGlobalStyle } from "styled-components"
import DaxlineProRegular  from "../assets/DaxlinePro-Regular.ttf"

export default createGlobalStyle`
  @font-face {
    font-family: Daxline Pro;
    font-style: normal;
    font-weight: 400;
    src: url(${DaxlineProRegular});
  }
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Daxline Pro', monospace;
  }

  #root {
    margin: 0 auto;
  }

  body {
    background-color: white;
  }
`
