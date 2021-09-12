import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const breakpoints = {
  sm: '38em',
  md: '48em',
  lg: '72em',
  xl: '80em',
};

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
  breakpoints,
  colors: {
    gray: {
      500: '#616369',
    },
  },
  styles: {
    global: (props) => ({
      body: {
        backgroundColor: mode('white', '#1f2937')(props),
        color: mode('black', 'white')(props),
      },
      strong: {
        color: mode('black', '#FDE68A')(props),
      },
      nav: {
        color: mode('gray.500', 'white')(props),
        fontWeight: 720,
      },
    }),
  },
});

export default theme;
