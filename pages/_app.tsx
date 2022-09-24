import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import Navbar from '~components/navbar';
import Kbar from '~/components/kbar';

import 'react-vertical-timeline-component/style.min.css';
import "@fontsource/ubuntu";

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
    <Kbar>
      <Navbar />
      <Component {...pageProps} />
    </Kbar>
  </ThemeProvider>
);

export default App;
