import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Navbar from '../components/navBar';
import '../../styles/globals.css';
import 'react-vertical-timeline-component/style.min.css';
import KbarContext from '../components/kbarContext';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
    <KbarContext>
      <Navbar />
      <Component {...pageProps} />
    </KbarContext>
  </ThemeProvider>
);

export default App;
