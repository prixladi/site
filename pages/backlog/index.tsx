import type { NextPage } from 'next';
import * as R from 'ramda';
import { useEffect, useState } from 'react';

import Content from '~/components/content';
import InlineLink from '~/components/inlineLink';

type BLIs = {
  todo: {
    title: string;
    description: string;
  }[];
  done: {
    title: string;
  }[];
  closed: {
    title: string;
    reason?: string;
  }[];
};

/* eslint-disable-next-line */ // Ramda placeholder is not a dangling __ !!
const keyedMap = <T extends unknown>(item: T[]) => R.addIndex<T>(R.map)(R.__, item);

const Backlog: NextPage = () => {
  const [data, setData] = useState<BLIs>();

  useEffect(() => {
    (async () => {
      const result = await fetch('/data/backlog.json');
      const json = await result.json();
      setData(json);
    })();
  }, []);

  if (!data) return null;

  return (
    <Content title="Backlog" className="max-w-4xl">
      <main className="flex flex-col gap-7 p-3">
        <h1 className="font-extrabold text-4xl">Backlog</h1>
        {data.todo?.length > 0 && (
          <>
            <h2 className="font-bold text-3xl">Todo:</h2>
            <ul className="flex flex-col gap-1 list-disc">
              {keyedMap(data.todo)((x, i) => (
                <li key={i} className="text-lg font-semibold">
                  {x.title}
                </li>
              ))}
            </ul>
          </>
        )}

        {data.done?.length > 0 && (
          <>
            <h2 className="font-bold text-3xl">Done:</h2>
            <ul className="flex flex-col gap-1 list-disc">
              {keyedMap(data.todo)((x, i) => (
                <li key={i} className="text-lg font-semibold">
                  {x.title}
                </li>
              ))}
            </ul>
          </>
        )}

        {data.closed?.length > 0 && (
          <>
            <h2 className="font-bold text-3xl">Closed:</h2>
            <ul className="flex flex-col gap-1 list-disc">
              {keyedMap(data.closed)((x, i) => (
                <li key={i}>
                  <span className="line-through">{x.title}</span>{' '}
                  <span className="font-thin">({x.reason})</span>
                </li>
              ))}
            </ul>
          </>
        )}

        <span className="flex justify-between text-lg">
          <InlineLink
            href="https://github.com/prixladi/ladislavprix/blob/master/public/data/backlog.json"
            text="view"
          />
          <InlineLink
            href="https://github.com/prixladi/ladislavprix/edit/master/public/data/backlog.json"
            text="edit"
          />
        </span>
      </main>
    </Content>
  );
};

export default Backlog;