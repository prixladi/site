import Link from 'next/link';
import { useRouter } from 'next/router';

import clsx from 'clsx';

import { routes } from '~/lib/constants';

import BurgerMenu from './burger-menu';
import FullMenu from './full-menu';

const { root, ...restRoutes } = routes;
const navRoutes = Object.values(restRoutes).filter((x) => x.showInNavigation);

const Navbar = () => {
  const { pathname } = useRouter();

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
        <FullMenu />
        <BurgerMenu navRoutes={navRoutes} />
      </div>
    </div>
  );
};

export default Navbar;
