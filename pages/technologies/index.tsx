import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import ReactWordcloud, { OptionsProp } from 'react-wordcloud';

import Content from '~/components/content';
import InlineLink from '~/components/inlineLink';
import Article, { ArticleHeader, ArticleMain } from '~/components/article';
import { routes } from '~/lib/constants';
import technologies from '~/lib/data/technologies';
import { appearingTextInit } from '~/lib/utils/motions';

const options: OptionsProp = {
  colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
  enableTooltip: false,
  deterministic: false,
  fontFamily: 'impact',
  fontStyle: 'normal',
  fontWeight: 'normal',
  padding: 1,
  rotations: 1,
  rotationAngles: [0, 0],
  scale: 'log',
  spiral: 'archimedean',
  transitionDuration: 1000,
};

const Timeline: NextPage = () => {
  const [renderCloud, setRenderCloud] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRenderCloud(true);
    }, 1000);

    return () => clearTimeout(timeout);
  });

  return (
    <Content title="Technologies | Láďa Prix" type='medium'>
      <Article>
        <ArticleHeader
          title={<>Here are some of the technologies I use.</>}
          subTitle={
            <>
              To see on what projects I used some of the technologies you can check the{' '}
              <InlineLink href={routes.projects.path} text="projects page" />.
            </>
          }
        />

        <ArticleMain m={appearingTextInit().parent}>
          <motion.div {...appearingTextInit().children}>
            {renderCloud && <ReactWordcloud options={options} words={technologies} />}
          </motion.div>
        </ArticleMain>
      </Article>
    </Content>
  );
};

export default Timeline;
