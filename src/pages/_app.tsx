import React from 'react';
import Head from 'next/head';

import GlobalStyle from '../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';

import dark from '../styles/themes/dark';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
