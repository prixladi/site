import Link from 'next/link';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as R from 'ramda';

import { Route, routes } from '~/lib/constants';
import { isActivePath, isExternalRoute } from '~/lib/utils';

import BurgerNavbar from './burger';
import ThemeSwitcher from '../themeSwitcher';

const { root, ...restRoutes } = routes;
const navRoutes = Object.values(restRoutes).filter((x) => x.showInNavigation);

const Dots = () => (
  <div className="flex items-center">
    <BiDotsVerticalRounded className="dark:text-gray-400 text-gray-60" />
  </div>
);

const NavBarItem = ({ route, currentPathname }: { route: Route; currentPathname: string }) => (
  <div className="w-full flex">
    <li
      className={clsx('navbar-hover-underline text-xl text-gray-500 font-bold items-center flex dark:text-gray-400', {
        'dark:text-white text-black navbar-selected-bg-size': isActivePath(route.path, currentPathname),
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

const Navbar = () => {
  const { pathname } = useRouter();

  const func = R.pipe(
    R.map((x: Route) => <NavBarItem key={x.path} route={x} currentPathname={pathname} />),
    R.reduce(
      (acc, curr) => (acc.length > 0 ? [...acc, <Dots key={`dot.${acc.length}`} />, curr] : [curr]),
      [] as JSX.Element[],
    ),
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
          <Link href={root.path}>Ladislav Prix</Link>
        </div>
        <nav className="gap-8 hidden lg:flex">
          <ul className="gap-8 hidden lg:flex">{func(navRoutes)}</ul>
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
