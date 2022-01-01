import { motion } from 'framer-motion';
import { appearingTextInit, scaleUpHover } from '../utils/motions';

type Props = {
  title: React.ReactNode;
  subTitle: React.ReactNode;
};

const ArticleHeader: React.FC<Props> = ({ title, subTitle }) => (
  <motion.header {...appearingTextInit().parent} className="article-header">
    <motion.div {...appearingTextInit().children}>
      <motion.h2 {...scaleUpHover()} className="article-title">
        {title}
      </motion.h2>
    </motion.div>

    <motion.div {...appearingTextInit().children}>
      <motion.p {...scaleUpHover()} className="article-subtitle">
        {subTitle}
      </motion.p>
    </motion.div>
  </motion.header>
);

export default ArticleHeader;
