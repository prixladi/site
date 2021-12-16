import Link from 'next/link';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import TehemeSwitcher from './themeSwitcher';
import { Route, routes } from '../constants';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import BurgerNavbar from './burgerNavbar';

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
    R.reduce(
      (acc, curr) => (acc.length > 0 ? [...acc, <Dots key={`dot.${acc.length}`} />, curr] : [curr]),
      [] as JSX.Element[],
    ),
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
        <BurgerNavbar />
      </div>
    </div>
  );
};

export default Navbar;
