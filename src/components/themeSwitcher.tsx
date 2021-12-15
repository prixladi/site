import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';
import { BsSun } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const TehemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [client, setClient] = useState(false);

  useEffect(() => {
      setClient(true);
  }, [])

  return (
    <button
      type="button"
      className="theme-switcher"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {client && theme === 'dark' ? <FaMoon className='w-8 h-8' /> : <BsSun className='w-8 h-8' />}
    </button>
  );
};

export default TehemeSwitcher;
