import { PropsWithChildren } from 'react';

import clsx from 'clsx';
import { motion as framerMotion } from 'framer-motion';

import { Motion } from '~/lib/utils/motions/shared';

type Props = PropsWithChildren<{
  motion?: Motion;
  className?: string;
}>;

const ArticleMain: React.FC<Props> = ({ children, motion, className }) => (
  <framerMotion.main className={clsx('w-full', className)} {...motion}>
    {children}
  </framerMotion.main>
);

export default ArticleMain;
