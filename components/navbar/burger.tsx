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
    className={clsx('navbar-hover-underline navbar-burger-item', {
      'navbar-item-selected': isActivePath(route.path, currentPathname),
    })}
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
    className="navbar-burger-close"
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
    <div className="navbar-burger">
      <SwapButton ariaLabel="toggle menu" onClick={() => setOpen(true)}>
        <SwapItem isIn={!open}>
          <Cross />
        </SwapItem>
        <SwapItem isIn={open}>
          <GiHamburgerMenu className="w-6 h-6" />
        </SwapItem>
      </SwapButton>
      <div className={clsx('navbar-burger-menu', { hidden: !open })}>
        {/* eslint-disable-next-line */}
        <div role="banner" className="navbar-burger-backdrop" onClick={() => setOpen(false)} />
        <nav className="navbar-burger-card">
          <div className="navbar-burger-header">
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
            <ul className="navbar-burger-item-wrapper">{func([routes.root, ...navRoutes])}</ul>
          </div>
          <div className="mt-auto">
            <button
              aria-label="change theme"
              type="button"
              className="navbar-burger-theme-button"
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
            <p className="navbar-burger-footer">
              <span>Copyright © 2021 Ladislav Prix</span>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Burger;
