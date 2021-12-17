import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import { scaleUpHover, apearingTextInit, scaleUpInit, mergeMotions } from '../utils/motions';
import { defaultScaleUpHoverOptions } from '../utils/motions/scaleUpHover';
import InlineLink from '../components/inlineLink';
import Content from '../components/content';

const Home: NextPage = () => (
  <Content title="Ladislav Prix" className="max-w-7xl">
    <main className="flex flex-col lg:flex-row flex-1 gap-8 items-center">
      <motion.div {...apearingTextInit().parent} className="w-full flex flex-col gap-4">
        <motion.div {...apearingTextInit().children}>
          <motion.h2
            {...scaleUpHover()}
            className="text-3xl md:text-4xl font-semibold duration-700 leading-tight md:leading-[3rem]"
          >
            Hi, I&apos;m Láďa, I&apos;m software developer from Czech Republic.
          </motion.h2>
        </motion.div>
        <motion.div {...apearingTextInit().children}>
          <motion.p
            {...scaleUpHover()}
            className="text-xl lg:pl-2 md:text-4xl font-semibold leading-tight md:leading-[3rem] text-gray-500 dark:text-gray-400 duration-700"
          >
            I&apos;m a 24 years old developer mostly interested in web and cloud development. You
            can see some of my projects on my{' '}
            <InlineLink href="https://github.com/prixladi" text="Github" />.
          </motion.p>
        </motion.div>
      </motion.div>
      <div className="w-full">
        <motion.img
          src="/assets/profile.jpg"
          alt="profile pricture"
          className="rounded-full object-cover scale-95"
          {...mergeMotions(
            scaleUpInit(),
            scaleUpHover({ ...defaultScaleUpHoverOptions, scale: 0.95 }),
          )}
        />
      </div>
    </main>
  </Content>
);

export default Home;
