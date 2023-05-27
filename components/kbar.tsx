import React, { useCallback } from 'react';
import type { PropsWithChildren } from 'react';

import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useMatches,
} from 'kbar';
import clsx from 'clsx';

import useKActions from '~/lib/hooks/use-k-actions';

import type {
  ActionId,
  ActionImpl} from 'kbar';

type ResultItemProps = {
  action: ActionImpl;
  active: boolean;
  currentRootActionId: ActionId;
};

const ResultItem = React.forwardRef(
  ({ action, active, currentRootActionId }: ResultItemProps, ref: React.Ref<HTMLDivElement>) => {
    const ancestors = React.useMemo(() => {
      if (!currentRootActionId) return action.ancestors;
      const index = action.ancestors.findIndex((ancestor) => ancestor.id === currentRootActionId);
      return action.ancestors.slice(index + 1);
    }, [action.ancestors, currentRootActionId]);

    return (
      <div
        ref={ref}
        className={clsx(
          'p-4 flex items-center cursor-pointer justify-between bg-transparent border-l-2 border-solid',
          {
            'bg-gray-200 dark:bg-gray-800': active,
            'bg-transparent': !active,
            'border-gray-400': active,
            'border-transparent': !active,
          },
        )}
      >
        <div className="flex gap-2 items-center text-sm">
          {action.icon && action.icon}
          <div className="flex flex-col">
            <div>
              {ancestors.length > 0 &&
                ancestors.map((ancestor) => (
                  <React.Fragment key={ancestor.id}>
                    <span className="opacity-50 mr-2">{ancestor.name}</span>
                    <span className="mr-2">&rsaquo;</span>
                  </React.Fragment>
                ))}
              <span>{action.name}</span>
            </div>
            {action.subtitle && <span className="text-xs opacity-70">{action.subtitle}</span>}
          </div>
        </div>
        {action.shortcut?.length ? (
          <div className="grid gap-1 grid-flow-col">
            {action.shortcut.map((sc) => (
              <kbd key={sc} className="p-1 bg-black bg-opacity-10 text-sm rounded-md">
                {sc}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    );
  },
);

ResultItem.displayName = 'ResultItem';

const Results = () => {
  const { results, rootActionId } = useMatches();

  const resultsRender = useCallback(
    // eslint-disable-next-line react/no-unused-prop-types
    ({ item, active }: { item: string | ActionImpl; active: boolean }) =>
      typeof item === 'string' ? (
        <div className="pb-2 pt-1 text-xs scale-90 font-semibold opacity-40 uppercase">{item}</div>
      ) : (
        <ResultItem action={item} active={active} currentRootActionId={rootActionId ?? ''} />
      ),
    [rootActionId],
  );

  return <KBarResults items={results} onRender={resultsRender} />;
};

const KBar: React.FC<PropsWithChildren> = ({ children }) => {
  const actions = useKActions();

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="kbar-positioner">
          <KBarAnimator className="max-w-xl w-full bg-white text-black rounded-lg overflow-hidden shadow-md dark:bg-gray-700 dark:text-white">
            <KBarSearch className="pl-3 py-4 w-full outline box-border outline-none border-none bg-white dark:bg-gray-700" />
            <Results />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
};

export default KBar;
