import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import Link from 'next/link';
import PageSEO from '../components/pageSEO';
import { scaleUpHover, apearingTextInit, scaleUpInit, mergeMotions } from '../utils/motions';
import { defaultScaleUpHoverOptions } from '../utils/motions/scaleUpHover';

const Home: NextPage = () => (
  <>
    <PageSEO title="Ladislav Prix" />
    <div className="max-w-7xl m-auto pt-8 md:pt-16 lg:pt-24 xl:pt-32 px-4 md:px-10 pb-16 md:pb-10">
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
              <Link passHref href="https://github.com/prixladi">
                {/* eslint-disable-next-line */}
                <a target="_blank" className="text-red-600 underline hover:no-underline">
                  Github
                </a>
              </Link>
              .
            </motion.p>
          </motion.div>
        </motion.div>
        <div className="w-full">
          <motion.img
            src="/assets/profile.jpg"
            alt="profile pricture"
            className="rounded-full object-cover scale-95"
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            {...mergeMotions(
              scaleUpInit(),
              scaleUpHover({ ...defaultScaleUpHoverOptions, scale: 1.05 }),
            )}
          />
        </div>
      </main>
      <div className="w-full bottom-0 left-0 md:left-auto absolute h-20 md:h-10 xl:h-14 flex content-center max-w-7xl">
        <p className="w-full text-center md:text-left my-4 text-xl text-gray-500 dark:text-gray-400">
          Ladislav Prix &copy; 2021, <br className="md:hidden block" />{' '}
          <span>elix78963@gmail.com</span>
        </p>
      </div>
    </div>
  </>
);

export default Home;
