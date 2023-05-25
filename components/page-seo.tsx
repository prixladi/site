import Head from 'next/head';

import { useTheme } from 'next-themes';

type Props = {
  title: string;
};

const PageSEO = ({ title }: Props) => {
  const { theme } = useTheme();

  return (
    <Head>
      <title>{title}</title>
      <meta name="theme-color" content={theme === 'dark' ? '#1A202C' : '#FFFFFF'} />
    </Head>
  );
};

export default PageSEO;
