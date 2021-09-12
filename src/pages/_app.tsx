import React from 'react';
import { Box, ChakraProvider, Container } from '@chakra-ui/react';

import theme from '../theme';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Ladislav Prix | Software developer </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1A202C" />
      );
    </Head>
    <ChakraProvider theme={theme}>
      <Box>
        <NavBar />
        <Container maxW={['60em']} p="1em" mt={['0.3em', '0.6em', '1em', '2em']}>
          <Component {...pageProps} />
        </Container>
      </Box>
    </ChakraProvider>
  </>
);

export default App;
