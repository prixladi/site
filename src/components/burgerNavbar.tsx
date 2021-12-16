import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FaMoon } from 'react-icons/fa';
import { BsSun } from 'react-icons/bs';
import { Route, routes } from '../constants';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { MdLaptopChromebook } from 'react-icons/md';

const NavBarItem = ({ route, currentPathname }: { route: Route; currentPathname: string }) => {
  const selected = !route.isExternal && route.path === currentPathname;

  return (
    <li
      className={clsx('navbar-hover-underline navbar-burger-item', {
        'navbar-item-selected': selected,
      })}
    >
      <Link href={route.path}>{route.name}</Link>
    </li>
  );
};

const { root, ...navRoutes } = routes;
const BurgerNavbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [client, setClient] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    setClient(true);
  }, []);

  const func = R.map((x: Route) => (
    <NavBarItem key={x.path} route={x} currentPathname={pathname} />
  ));

  return (
    <div className="navbar-burger">
      <button type="button" className="navbar-burger-button">
        <svg
          className="block h-8 w-8 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setOpen(true)}
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
      <div className={clsx('navbar-burger-menu', { hidden: !open })}>
        {/* eslint-disable-next-line */}
        <div role="banner" className="navbar-burger-backdrop" onClick={() => setOpen(false)} />
        <nav className="navbar-burger-card">
          <div className="navbar-burger-header">
            <Link href="/">
              <div className="mr-auto text-5xl font-bold leading-none flex gap-2">
                <MdLaptopChromebook />
              </div>
            </Link>
            <button type="button" className="navbar-close" onClick={() => setOpen(false)}>
              <svg
                className="navbar-burger-close"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mb-8">
            <ul className="navbar-burger-item-wrapper">{func(Object.values(navRoutes))}</ul>
          </div>
          <div className="mt-auto">
            <button
              type="button"
              className="navbar-burger-theme-button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <span className="flex flex1 gap-4">
                <span className="items-center flex">
                  {client && theme === 'dark' ? (
                    <FaMoon className="w-4 h-4" />
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

export default BurgerNavbar;
