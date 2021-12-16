import { useTheme } from 'next-themes';
import { BsSun, BsMoon } from 'react-icons/bs';
import { BiMoon } from 'react-icons/bi';

const TehemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const style = { transformOrigin: '50% 100px' };
  return (
    <button
      type="button"
      className="theme-switcher"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <div className="relative w-6 h-6">
        <span
          className="absolute inset-0 text-black dark:text-white transform dark:rotate-0 rotate-90 transition-transform duration-700"
          style={style}
        >
          <BiMoon className="w-6 h-6" />
        </span>
        <span
          className="absolute inset-0 text-black dark:text-white transform dark:-rotate-90 rotate-0 transition-transform duration-700"
          style={style}
        >
          <BsSun className="w-6 h-6" />
        </span>
      </div>
    </button>
  );
};

export default TehemeSwitcher;
