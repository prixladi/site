import { motion } from 'framer-motion';

import { appearingTextInit } from '~/lib/utils/motions';

type Props = {
  title: React.ReactNode;
  subTitle: React.ReactNode;
};

const ArticleHeader: React.FC<Props> = ({ title, subTitle }) => (
  <motion.header {...appearingTextInit().parent} className="w-full flex flex-col gap-4">
    <motion.div {...appearingTextInit().children}>
      <h2 className="text-3xl md:text-4xl font-semibold duration-700 leading-tight md:leading-[3rem]">{title}</h2>
    </motion.div>

    <motion.div {...appearingTextInit().children}>
      <p className="text-xl lg:pl-2 md:text-4xl font-semibold leading-tight md:leading-[3rem] text-gray-500 dark:text-gray-400 duration-700">{subTitle}</p>
    </motion.div>
  </motion.header>
);

export default ArticleHeader;
