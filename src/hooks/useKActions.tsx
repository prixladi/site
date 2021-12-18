import { Action } from 'kbar';
import { route } from 'next/dist/server/router';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { isExternalRoute, routes } from '../constants';

const useKActions = (): Action[] => {
  const router = useRouter();

  const navigationActions = useMemo(
    () =>
      Object.values(routes)
        .filter((x) => !isExternalRoute(x))
        .map((x) => {
          const Icon = x.Icon;
          return {
            id: x.path,
            name: x.name,
            shortcut: x.shortcuts,
            section: 'Navigation',
            icon: Icon && <Icon />,
            subtitle: x.description,
            perform: () => router.push(x.path),
          };
        }),
    [routes, router],
  );

  const externalLinkActions = Object.values(routes)
    .filter(isExternalRoute)
    .map((x) => {
      const Icon = x.Icon;
      return {
        id: x.path,
        name: x.name,
        shortcut: x.shortcuts,
        section: 'External link',
        icon: Icon && <Icon />,
        subtitle: x.description,
        perform: () => window.open(x.path, '_blank'),
      };
    });

  return [...navigationActions, ...externalLinkActions];
};

export default useKActions;
