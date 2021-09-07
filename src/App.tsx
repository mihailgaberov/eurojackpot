import React from 'react';
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import TitleRow from "./components/TitleRow";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TitleRow date={'Friday 03 Sep 2021'} />
      <article>main content here...</article>
      <aside>message card components here...</aside>
    </>
  );
}

export default App;
