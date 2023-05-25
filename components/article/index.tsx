import { PropsWithChildren } from 'react';

import clsx from 'clsx';

import ArticleHeader from './articleHeader';
import ArticleMain from './articleMain';

type Props = PropsWithChildren<{
  className?: string;
}>;

const Article: React.FC<Props> = ({ children, className }) => (
  <article className={clsx('flex flex-col gap-8 items-center', className)}>{children}</article>
);

export { ArticleHeader, ArticleMain };
export default Article;
