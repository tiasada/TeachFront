import React, { Fragment } from 'react'
import GlobalStyle from './globalStyles';
import PagesApp from './routes'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <PagesApp />
    </Fragment>
  );
}

export default App
