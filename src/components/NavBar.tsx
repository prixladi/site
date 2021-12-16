import Link from 'next/link';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { motion } from 'framer-motion';
import BurgerNavbar from './burgerNavbar';
import { Route, routes } from '../constants';
import ThemeSwitcher from './themeSwitcher';
import {
  fadeUpChildVariants,
  fadeWrapperVariants,
  scaleUpMediumAndFastWhileHoverVariants,
  scaleUpTinyWhileHoverVariants,
} from '../utils/motions';

const Dots = () => (
  <div className="flex items-center">
    <BiDotsVerticalRounded className="dark:text-gray-400 text-gray-60" />
  </div>
);

const NavBarItem = ({ route, currentPathname }: { route: Route; currentPathname: string }) => {
  const selected = !route.isExternal && route.path === currentPathname;

  return (
    <motion.div className="w-full flex" variants={fadeUpChildVariants}>
      <motion.li
        whileHover="whileHover"
        variants={R.mergeRight(scaleUpTinyWhileHoverVariants(), fadeUpChildVariants)}
        className={clsx('navbar-hover-underline', {
          'navbar-item': !selected,
          'navbar-item-selected': selected,
        })}
      >
        <Link href={route.path}>{route.name}</Link>
      </motion.li>
    </motion.div>
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
        <motion.div
          whileHover="whileHover"
          variants={scaleUpMediumAndFastWhileHoverVariants}
          className={clsx('navbar-hover-underline navbar-name', {
            'lg:navbar-name-selected': pathname === root.path,
          })}
        >
          <Link href={root.path}>Ladislav Prix</Link>
        </motion.div>
        <nav className="navbar-middle">
          <motion.ul
            initial="initial"
            animate="animate"
            variants={fadeWrapperVariants}
            className="navbar-middle"
          >
            {func(Object.values(navRoutes))}
          </motion.ul>
        </nav>
        <motion.div
          whileHover="whileHover"
          variants={scaleUpMediumAndFastWhileHoverVariants}
          className="navbar-theme-switch-wrapper"
        >
          <ThemeSwitcher />
        </motion.div>
        <BurgerNavbar />
      </div>
    </div>
  );
};

export default Navbar;
