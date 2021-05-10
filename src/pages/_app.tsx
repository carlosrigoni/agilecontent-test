import React from 'react';

import GlobalStyle from '../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';

import dark from '../styles/themes/dark';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
