import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { BiMoon } from 'react-icons/bi';
import { BsSun } from 'react-icons/bs';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { MdLaptopChromebook } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';

import { Route, routes } from '~/lib/constants';
import { isActivePath, isExternalRoute, toggleTheme } from '~/lib/utils';

import SwapButton from '../swapButton';
import SwapItem from '../swapItem';

const NavBarItem = ({
  route,
  currentPathname,
  close,
}: {
  route: Route;
  currentPathname: string;
  close: () => void;
}) => (
  <li
    className={clsx(
      'navbar-hover-underline text-xl text-gray-600 font-semibold items-center flex leading-10 dark:text-gray-400',
      {
        'dark:text-white text-black navbar-selected-bg-size': isActivePath(
          route.path,
          currentPathname,
        ),
      },
    )}
  >
    <Link passHref href={route.path}>
      {/* eslint-disable */}
      <a
        rel="noopener"
        target={isExternalRoute(route) ? '_blank' : undefined}
        onClick={() => close()}
        className="w-full text-left"
      >
        {/* eslint-enable */}
        {route.name}
      </a>
    </Link>
  </li>
);

const Cross = () => (
  <svg
    className="h-6 w-6  cursor-pointer text-gray-600 hover:text-gray-900 dark:text-gray-400"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

type BurgerProps = {
  navRoutes: Route[];
};

const Burger = ({ navRoutes }: BurgerProps) => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [client, setClient] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    setClient(true);
  }, []);

  const func = R.map((x: Route) => (
    <NavBarItem key={x.path} route={x} currentPathname={pathname} close={() => setOpen(false)} />
  ));

  return (
    <div className="lg:hidden">
      <SwapButton ariaLabel="toggle menu" onClick={() => setOpen(true)}>
        <SwapItem isIn={!open}>
          <Cross />
        </SwapItem>
        <SwapItem isIn={open}>
          <GiHamburgerMenu className="w-6 h-6" />
        </SwapItem>
      </SwapButton>
      <div className={clsx('relative z-50', { hidden: !open })}>
        {/* eslint-disable-next-line */}
        <div
          role="banner"
          className="fixed inset-0 bg-gray-800 opacity-25"
          onClick={() => setOpen(false)}
        />
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto dark:bg-[url('/assets/bg-dark.png')] bg-[url('/assets/bg-light.png')]">
          <div className="flex items-center mb-8">
            <div className="mr-auto text-5xl font-bold leading-none flex gap-2">
              <MdLaptopChromebook />
            </div>
            <button
              aria-label="close menu"
              type="button"
              className="navbar-close"
              onClick={() => setOpen(false)}
            >
              <Cross />
            </button>
          </div>
          <div className="mb-8">
            <ul className="gap-8 lg:gap-12 flex flex-col">{func([routes.root, ...navRoutes])}</ul>
          </div>
          <div className="mt-auto">
            <button
              aria-label="change theme"
              type="button"
              className="block w-full px-4 py-3 mb-2 leading-loose text-sm text-gray-600 border-2 border-gray-600 font-semibold bg-transparent rounded-xl dark:text-gray-400 dark:border-gray-400"
              onClick={() => setTheme(toggleTheme(theme))}
            >
              <span className="flex flex1 gap-4">
                <span className="items-center flex">
                  {client && theme === 'dark' ? (
                    <BiMoon className="w-4 h-4" />
                  ) : (
                    <BsSun className="w-4 h-4" />
                  )}
                </span>
                switch to {client && theme === 'dark' ? 'light' : 'dark'} mode{' '}
              </span>
            </button>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2021 Ladislav Prix</span>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Burger;
