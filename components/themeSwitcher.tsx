import { useTheme } from 'next-themes';
import { BsSun } from 'react-icons/bs';
import { BiMoon } from 'react-icons/bi';

import { toggleTheme } from '~/lib/utils';

import SwapButton from './swapButton';
import SwapItem from './swapItem';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <SwapButton ariaLabel="change theme" onClick={() => setTheme(toggleTheme(theme))}>
      <SwapItem isIn={true} className="dark:rotate-0">
        <BiMoon className="w-6 h-6" />
      </SwapItem>
      <SwapItem isIn={false} className="dark:-rotate-90">
        <BsSun className="w-6 h-6" />
      </SwapItem>
    </SwapButton>
  );
};

export default ThemeSwitcher;
