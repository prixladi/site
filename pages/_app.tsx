import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import Navbar from '~components/navbar';
import Kbar from '~/components/kbar'

import '../styles/globals.css';
import 'react-vertical-timeline-component/style.min.css';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
    <Kbar>asdad
      <Navbar />
      <Component {...pageProps} />
    </Kbar>
  </ThemeProvider>
);

export default App;
