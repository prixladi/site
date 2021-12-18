import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import ReactWordcloud, { OptionsProp } from 'react-wordcloud';
import Content from '../../components/content';
import InlineLink from '../../components/inlineLink';
import { routes } from '../../constants';
import technologies from '../../data/technologies';
import { apearingTextInit, scaleUpHover } from '../../utils/motions';

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
      <main className="flex flex-col gap-8 items-center">
        <motion.div {...apearingTextInit().parent} className="w-full flex flex-col gap-4">
          <motion.div {...apearingTextInit().children}>
            <motion.h2
              {...scaleUpHover()}
              className="text-3xl md:text-4xl font-semibold duration-700 leading-tight md:leading-[3rem]"
            >
              Here is a word cloud of technologies i usually work with or used to work with.
            </motion.h2>
          </motion.div>
          <motion.div {...apearingTextInit().children}>
            <motion.p
              {...scaleUpHover()}
              className="text-xl lg:pl-2 md:text-4xl font-semibold leading-tight md:leading-[3rem] text-gray-500 dark:text-gray-400 duration-700"
            >
              To see on what projects i used some of the technologies you can check{' '}
              <InlineLink href={routes.projects.path} text="projects page" />.
            </motion.p>
          </motion.div>
          {renderCloud && <ReactWordcloud options={options} words={technologies} />}
        </motion.div>
      </main>
    </Content>
  );
};

export default Timeline;
