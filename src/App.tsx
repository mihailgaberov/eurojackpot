import React from 'react';
import GlobalStyle from "./styles/global";
import Header from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <article>main content here...</article>
      <aside>message card components here...</aside>
    </>
  );
}

export default App;
