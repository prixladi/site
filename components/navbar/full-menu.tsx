import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { BiDotsVerticalRounded } from 'react-icons/bi';

import { routes } from '~/lib/constants';

import ThemeSwitcher from '../theme-switcher';

import FullMenuItem from './full-menu-item';

const { root, ...restRoutes } = routes;
const navRoutes = Object.values(restRoutes).filter((x) => x.showInNavigation);

const FullMenu: React.FC = () => {
  const { pathname } = useRouter();

  const routesWithDots = useMemo(
    () =>
      navRoutes
        .map((route) => <FullMenuItem key={route.path} route={route} currentPathname={pathname} />)
        .reduce<JSX.Element[]>(
          (acc, curr) =>
            acc.length > 0
              ? [
                  ...acc,
                  <div key={`dot.${acc.length}`} className="flex items-center">
                    <BiDotsVerticalRounded className="dark:text-gray-400 text-gray-60" />
                  </div>,
                  curr,
                ]
              : [curr],
          [],
        ),
    [pathname],
  );

  return (
    <>
      <nav className="gap-8 hidden lg:flex">
        <ul className="gap-8 hidden lg:flex">{routesWithDots}</ul>
      </nav>
      <div className="hidden lg:flex">
        <ThemeSwitcher />
      </div>
    </>
  );
};

export default FullMenu;
