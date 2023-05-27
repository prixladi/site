import { useTheme } from 'next-themes';
import { BsSun } from 'react-icons/bs';
import { BiMoon } from 'react-icons/bi';

import { toggleTheme } from '~/lib/utils';

import SwapableButton from './swapable-button';
import SwapableItem from './swapable-item';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <SwapableButton ariaLabel="change theme" onClick={() => setTheme(toggleTheme(theme))}>
      <SwapableItem isIn className="dark:rotate-0">
        <BiMoon className="w-6 h-6" />
      </SwapableItem>
      <SwapableItem isIn={false} className="dark:-rotate-90">
        <BsSun className="w-6 h-6" />
      </SwapableItem>
    </SwapableButton>
  );
};

export default ThemeSwitcher;
