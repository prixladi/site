import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Navbar from '../components/navBar';
import '../../styles/globals.css';
import 'react-vertical-timeline-component/style.min.css';
import Kbar from '../components/kbar';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
    <Kbar>
      <Navbar />
      <Component {...pageProps} />
    </Kbar>
  </ThemeProvider>
);

export default App;
