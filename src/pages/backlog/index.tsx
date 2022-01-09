import type { NextPage } from 'next';
import * as R from 'ramda';
import { useEffect, useState } from 'react';
import Content from '../../components/content';
import InlineLink from '../../components/inlineLink';

const Backlog: NextPage = () => {
  const [data, setData] = useState([] as string[]);

  useEffect(() => {
    const call = async () => {
      const result = await fetch('/data/backlog.json');
      const json = await result.json();
      setData(json);
    };

    call();
  }, []);

  const keyedMap = R.addIndex<string>(R.map);
  return (
    <Content title="Backlog" className="max-w-4xl">
      <main className="flex flex-col gap-7 p-3">
        <h1 className="font-extrabold text-4xl">Backlog</h1>
        <ul className="flex flex-col gap-1 list-disc">
          {keyedMap(
            (x, i) => (
              <li key={i} className="text-lg font-semibold">
                {x}
              </li>
            ),
            data,
          )}
        </ul>
        <span className="flex justify-between text-lg">
          <InlineLink
            href="https://github.com/prixladi/ladislavprix/blob/master/public/backlog.html"
            text="view"
          />
          <InlineLink
            href="https://github.com/prixladi/ladislavprix/edit/master/public/backlog.html"
            text="edit"
          />
        </span>
      </main>
    </Content>
  );
};

export default Backlog;
