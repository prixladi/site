import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import ReactWordcloud, { OptionsProp } from 'react-wordcloud';
import ArticleHeader from '../../components/articleHeader';
import Content from '../../components/content';
import InlineLink from '../../components/inlineLink';
import { routes } from '../../constants';
import technologies from '../../data/technologies';
import { appearingTextInit } from '../../utils/motions';

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
    <Content title="Technologies | Ladislav Prix" className="max-w-4xl">
      <article className="article">
        <ArticleHeader
          title={<>Here are some of the technologies I use.</>}
          subTitle={
            <>
              To see on what projects I used some of the technologies you can check the{' '}
              <InlineLink href={routes.projects.path} text="projects page" />.
            </>
          }
        />

        <motion.main className="article-main" {...appearingTextInit().parent}>
          <motion.div {...appearingTextInit().children}>
            {renderCloud && <ReactWordcloud options={options} words={technologies} />}
          </motion.div>
        </motion.main>
      </article>
    </Content>
  );
};

export default Timeline;
