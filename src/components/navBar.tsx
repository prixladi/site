import Link from 'next/link';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { motion } from 'framer-motion';
import BurgerNavbar from './burgerNavbar';
import { Route, routes } from '../constants';
import ThemeSwitcher from './themeSwitcher';
import { appearingTextInit, scaleUpHover } from '../utils/motions';
import { defaultScaleUpHoverOptions } from '../utils/motions/scaleUpHover';
import { isActivePath, isExternalRoute } from '../utils';

const { root, ...restRoutes } = routes;
const navRoutes = Object.values(restRoutes).filter((x) => x.showInNavigation);

const Dots = () => (
  <div className="flex items-center">
    <BiDotsVerticalRounded className="dark:text-gray-400 text-gray-60" />
  </div>
);

const NavBarItem = ({ route, currentPathname }: { route: Route; currentPathname: string }) => (
  <motion.div className="w-full flex" {...appearingTextInit().children}>
    <motion.li
      className={clsx('navbar-hover-underline', {
        'navbar-item': !isActivePath(route.path, currentPathname),
        'navbar-item-selected': isActivePath(route.path, currentPathname),
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
    </motion.li>
  </motion.div>
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
    <div className="navbar">
      <div className="navbar-content">
        <motion.div
          {...scaleUpHover()}
          className={clsx('navbar-hover-underline navbar-name', {
            'lg:navbar-name-selected': pathname === root.path,
          })}
        >
          <Link href={root.path}>Ladislav Prix</Link>
        </motion.div>
        <nav className="navbar-middle">
          <motion.ul className="navbar-middle">{func(navRoutes)}</motion.ul>
        </nav>
        <motion.div
          {...scaleUpHover({ ...defaultScaleUpHoverOptions, scale: 1.3, duration: 0.5 })}
          className="navbar-theme-switch-wrapper"
        >
          <ThemeSwitcher />
        </motion.div>
        <BurgerNavbar navRoutes={navRoutes} />
      </div>
    </div>
  );
};

export default Navbar;
