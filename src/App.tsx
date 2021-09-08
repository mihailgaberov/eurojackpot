import React from 'react';
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import TitleRow from "./components/TitleRow";
import Numbers from "./components/Numbers";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TitleRow date={'Friday 03 Sep 2021'} />
      <Numbers regularNumbers={[
        5,
        9,
        20,
        44,
        48
      ]} euroNumbers={[4, 10]} />
      <article>main content here...</article>
      <aside>message card components here...</aside>
    </>
  );
}

export default App;
