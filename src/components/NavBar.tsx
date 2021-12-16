import Link from 'next/link';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FaMoon } from 'react-icons/fa';
import { BsSun } from 'react-icons/bs';
import TehemeSwitcher from './themeSwitcher';
import { Route, routes } from '../constants';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as R from 'ramda';

const Burger = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

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
              {/* eslint-disable-next-line */}
              <a className="mr-auto text-3xl font-bold leading-none">
                <svg className="h-12" viewBox="0 0 100 100">
                  <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z" />
                </svg>
              </a>
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
            <ul className="navbar-burger-item-wrapper">
              <li className="navbar-burger-item">
                <Link href={routes.technologies.path}>Technologies</Link>
              </li>
              <li className="navbar-burger-item">
                <Link href={routes.projects.path}>Projects</Link>
              </li>
              <li className="navbar-burger-item">
                <Link href={routes.technologies.path}>Timeline</Link>
              </li>
              <li className="navbar-burger-item">
                <Link href={routes.blog.path}>Blog</Link>
              </li>
            </ul>
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

const Dots = () => (
  <div className="flex items-center">
    <BiDotsVerticalRounded className="dark:text-gray-400 text-gray-60" />
  </div>
);

const NavBarItem = ({ route, currentPathname }: { route: Route; currentPathname: string }) => {
  const selected = !route.isExternal && route.path === currentPathname;

  return (
    <li
      className={clsx('navbar-hover-underline', {
        'navbar-item': !selected,
        'navbar-item-selected': selected,
      })}
    >
      <Link href={route.path}>{route.name}</Link>
    </li>
  );
};

const { root, ...navRoutes } = routes;
const Navbar = () => {
  const { pathname } = useRouter();

  const func = R.pipe(
    R.map((x: Route) => <NavBarItem key={x.path} route={x} currentPathname={pathname} />),
    R.intersperse(<Dots />),
  );

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div
          className={clsx('navbar-hover-underline', {
            'navbar-name-selected': pathname === root.path,
            'navbar-name': pathname !== root.path,
          })}
        >
          <Link href={root.path}>Ladislav Prix</Link>
        </div>
        <nav className="navbar-middle">
          <ul className="navbar-middle">{func(Object.values(navRoutes))}</ul>
        </nav>
        <div className="navbar-theme-switch-wrapper">
          <TehemeSwitcher />
        </div>
        <Burger />
      </div>
    </div>
  );
};

export default Navbar;
