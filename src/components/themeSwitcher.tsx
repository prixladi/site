import { useTheme } from 'next-themes';
import { BsSun } from 'react-icons/bs';
import { BiMoon } from 'react-icons/bi';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const style = { transformOrigin: '50% 100px' };
  return (
    <button
      type="button"
      className="rounded-swap-button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <div className="relative w-6 h-6">
        <span className="rounded-swap-1" style={style}>
          <BiMoon className="w-6 h-6" />
        </span>
        <span className="rounded-swap-2" style={style}>
          <BsSun className="w-6 h-6" />
        </span>
      </div>
    </button>
  );
};

export default ThemeSwitcher;
