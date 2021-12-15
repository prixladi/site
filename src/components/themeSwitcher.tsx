import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';
import { BsSun } from 'react-icons/bs';

const TehemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className="theme-switcher"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <FaMoon className='w-8 h-8' /> : <BsSun className='w-8 h-8' />}
    </button>
  );
};

export default TehemeSwitcher;
