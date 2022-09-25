import clsx from 'clsx';
import { motion } from 'framer-motion';

import { Motion } from '~/lib/utils/motions/shared';

type Props = {
  children: React.ReactNode;
  m?: Motion;
  className?: string;
};

const ArticleMain: React.FC<Props> = ({ children, m, className }) => (
  <motion.main className={clsx('w-full', className)} {...m}>
    {children}
  </motion.main>
);

export default ArticleMain;
