import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { useTheme } from 'next-themes';
import { BsSun } from 'react-icons/bs';
import { BiMoon } from 'react-icons/bi';

import { routes } from '../constants';
import { isExternalRoute } from '../utils';

import type { Action } from 'kbar';

const useKActions = (): Action[] => {
  const router = useRouter();
  const { setTheme } = useTheme();

  const themeActions: Action[] = [
    {
      id: 'themeSwitchLight',
      name: 'Light',
      section: 'theme',
      shortcut: ['alt', 'o'],
      keywords: 'theme dark light',
      icon: <BsSun />,
      subtitle: `Change theme of whole page to light`,
      perform: () => {
        setTheme('light');
      },
    },
    {
      id: 'themeSwitchDark',
      name: 'Dark',
      section: 'theme',
      shortcut: ['alt', 'i'],
      keywords: 'theme dark light',
      icon: <BiMoon />,
      subtitle: `Change theme of whole page to dark`,
      perform: () => {
        setTheme('dark');
      },
    },
  ];

  const navigationActions: Action[] = useMemo(
    () =>
      Object.values(routes)
        .filter((x) => !isExternalRoute(x))
        .map((x) => {
          const { Icon } = x;
          return {
            id: x.path,
            name: x.name,
            shortcut: x.shortcuts,
            section: 'navigation',
            icon: Icon && <Icon />,
            subtitle: x.description,
            perform: () => router.push(x.path),
          };
        }),
    [router],
  );

  const externalLinkActions: Action[] = Object.values(routes)
    .filter(isExternalRoute)
    .map((x) => {
      const { Icon } = x;
      return {
        id: x.path,
        name: x.name,
        shortcut: x.shortcuts,
        section: 'external links',
        icon: Icon && <Icon />,
        subtitle: x.description,
        perform: () => window.open(x.path, '_blank'),
      };
    });

  return [...navigationActions, ...externalLinkActions, ...themeActions];
};

export default useKActions;
