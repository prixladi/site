import Link from 'next/link';
import { useRouter } from 'next/router';

import { BiDotsVerticalRounded } from 'react-icons/bi';
import clsx from 'clsx';
import * as R from 'ramda';

import { Route, routes } from '~/lib/constants';
import { isActivePath, isExternalRoute } from '~/lib/utils';

import ThemeSwitcher from '../themeSwitcher';

import BurgerNavbar from './burger';
import { useMemo } from 'react';

const { root, ...restRoutes } = routes;
const navRoutes = Object.values(restRoutes).filter((x) => x.showInNavigation);

const Dots = () => (
  <div className="flex items-center">
    <BiDotsVerticalRounded className="dark:text-gray-400 text-gray-60" />
  </div>
);

const NavBarItem = ({ route, currentPathname }: { route: Route; currentPathname: string }) => {
  const isActive = isActivePath(route.path, currentPathname);

  return (
    <div className="w-full flex">
      <li
        className={clsx('navbar-hover-underline text-xl font-bold items-center flex', {
          'text-gray-500 dark:text-gray-400': !isActive,
          'dark:text-white text-black navbar-selected-bg-size': isActive,
        })}
      >
        <Link passHref href={route.path}>
          {/* eslint-disable */}
          <a
            rel={isExternalRoute(route) ? 'noopener' : undefined}
            target={isExternalRoute(route) ? '_blank' : undefined}
          >
            {route.name}
          </a>
          {/* eslint-enable */}
        </Link>
      </li>
    </div>
  );
};

const Navbar = () => {
  const { pathname } = useRouter();

  const routes = useMemo(
    () =>
      navRoutes
        .map((route) => <NavBarItem key={route.path} route={route} currentPathname={pathname} />)
        .reduce<JSX.Element[]>(
          (acc, curr) =>
            acc.length > 0 ? [...acc, <Dots key={`dot.${acc.length}`} />, curr] : [curr],
          [],
        ),
    [navRoutes, pathname],
  );

  return (
    <div className="min-h-0 max-w-[100rem] m-auto pt-6 md:pt-8 lg:pt-16 px-4 md:px-10">
      <div className="flex justify-between">
        <div
          className={clsx(
            'navbar-hover-underline font-semibold text-3xl leading-[3rem] text-black dark:text-white',
            {
              'dark:text-white text-black navbar-selected-bg-size': pathname === root.path,
            },
          )}
        >
          <Link href={root.path}>Láďa Prix</Link>
        </div>
        <nav className="gap-8 hidden lg:flex">
          <ul className="gap-8 hidden lg:flex">{routes}</ul>
        </nav>
        <div className="hidden lg:flex">
          <ThemeSwitcher />
        </div>
        <BurgerNavbar navRoutes={navRoutes} />
      </div>
    </div>
  );
};

export default Navbar;
