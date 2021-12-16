import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import * as R from 'ramda';
import PageSEO from '../components/pageSEO';
import {
  fadeWrapperVariants,
  fadeUpChildVariants,
  scaleUpVariants,
  scaleUpTinyWhileHoverVariants,
} from '../utils/motions';
import Link from 'next/link';

const Home: NextPage = () => (
  <>
    <PageSEO title="Ladislav Prix" />
    <div className="max-w-7xl m-auto pt-8 md:pt-16 lg:pt-24 xl:pt-32 px-4 md:px-10 pb-36">
      <main className="flex flex-col lg:flex-row flex-1 gap-8 items-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeWrapperVariants}
          className="w-full flex flex-col gap-4"
        >
          <motion.div variants={fadeUpChildVariants}>
            <motion.h2
              whileHover="whileHover"
              variants={scaleUpTinyWhileHoverVariants()}
              className="text-3xl md:text-4xl font-semibold duration-700 leading-tight md:leading-[3rem]"
            >
              Hi, I&apos;m Láďa, I&apos;m software developer from Czech Republic.
            </motion.h2>
          </motion.div>
          <motion.div variants={fadeUpChildVariants}>
            <motion.p
              whileHover="whileHover"
              variants={scaleUpTinyWhileHoverVariants()}
              className="text-xl lg:pl-2 md:text-4xl font-semibold leading-tight md:leading-[3rem] text-gray-500 dark:text-gray-400 duration-700"
            >
              I&apos;m a 24 years old developer mostly interested in web and cloud development. You
              can see some of my projects on my{' '}
              <Link passHref href="https://github.com/prixladi">
                <a className="text-red-600 underline hover:no-underline">Github</a>
              </Link>
              .
            </motion.p>
          </motion.div>
        </motion.div>
        <div className="w-full">
          <motion.img
            src="/assets/profile.jpg"
            alt="profile pricture"
            className="rounded-full object-cover scale-90"
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            variants={R.mergeRight(scaleUpVariants, scaleUpTinyWhileHoverVariants(0.95))}
          />
        </div>
      </main>
      <div className="bottom-0 absolute h-20 flex content-center max-w-7xl m-auto">
        <p className="my-4 text-xl text-center text-gray-500 dark:text-gray-400">
          Ladislav Prix &copy; 2021, elix78963@gmail.com
        </p>
      </div>
    </div>
  </>
);

export default Home;
