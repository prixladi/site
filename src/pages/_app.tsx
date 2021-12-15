import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Navbar from '../components/navbar';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
    <Navbar />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
