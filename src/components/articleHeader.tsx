import { motion } from 'framer-motion';
import { appearingTextInit } from '../utils/motions';

type Props = {
  title: React.ReactNode;
  subTitle: React.ReactNode;
};

const ArticleHeader: React.FC<Props> = ({ title, subTitle }) => (
  <motion.header {...appearingTextInit().parent} className="article-header">
    <motion.div {...appearingTextInit().children}>
      <h2 className="article-title">{title}</h2>
    </motion.div>

    <motion.div {...appearingTextInit().children}>
      <p className="article-subtitle">{subTitle}</p>
    </motion.div>
  </motion.header>
);

export default ArticleHeader;
