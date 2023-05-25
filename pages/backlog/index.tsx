import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import Content from '~/components/content';
import InlineLink from '~/components/inline-link';

type BLIs = {
  todo: {
    id: string;
    title: string;
    description: string;
  }[];
  done: {
    id: string;
    title: string;
  }[];
  closed: {
    id: string;
    title: string;
    reason?: string;
  }[];
};

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
    <Content title="Backlog" type="medium">
      <main className="flex flex-col gap-7 p-3">
        <h1 className="font-extrabold text-4xl">Backlog</h1>
        {data.todo?.length > 0 && (
          <>
            <h2 className="font-bold text-3xl">Todo:</h2>
            <ul className="flex flex-col gap-1 list-disc">
              {data.todo.map((x) => (
                <li key={x.id} className="text-lg font-semibold">
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
              {data.done.map((x) => (
                <li key={x.id} className="text-lg font-semibold">
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
              {data.closed.map((x) => (
                <li key={x.id}>
                  <span className="line-through">{x.title}</span>{' '}
                  <span className="font-thin">({x.reason})</span>
                </li>
              ))}
            </ul>
          </>
        )}

        <span className="flex justify-between text-lg">
          <InlineLink
            href="https://github.com/prixladi/site/blob/master/public/data/backlog.json"
            text="view"
          />
          <InlineLink
            href="https://github.com/prixladi/site/edit/master/public/data/backlog.json"
            text="edit"
          />
        </span>
      </main>
    </Content>
  );
};

export default Backlog;
