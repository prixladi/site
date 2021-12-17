import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Navbar from '../components/navBar';
import '../../styles/globals.css';
import 'react-vertical-timeline-component/style.min.css';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
    <Navbar />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
