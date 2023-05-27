import Link from 'next/link';

import clsx from 'clsx';

import { isActivePath, isExternalRoute } from '~/lib/utils';

import type { Route } from '~/lib/constants';

type Props = { route: Route; currentPathname: string };

const FullMenuItem: React.FC<Props> = ({ route, currentPathname }) => {
  const isActive = isActivePath(route.path, currentPathname);

  return (
    <div className="w-full flex">
      <li
        className={clsx('navbar-hover-underline text-xl font-bold items-center flex', {
          'text-gray-500 dark:text-gray-400': !isActive,
          'dark:text-white text-black navbar-selected-bg-size': isActive,
        })}
      >
        <Link
          passHref
          href={route.path}
          rel={isExternalRoute(route) ? 'noopener' : undefined}
          target={isExternalRoute(route) ? '_blank' : undefined}
        >
          {route.name}
        </Link>
      </li>
    </div>
  );
};

export default FullMenuItem;
