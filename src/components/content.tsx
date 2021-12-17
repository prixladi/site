import clsx from 'clsx';
import PageSEO from './pageSEO';

type Props = {
  className?: string | undefined;
  children: React.ReactNode;
  title: string;
};

const Content = ({ className, children, title }: Props) => (
  <>
    <PageSEO title={title} />
    <div className={clsx('content-wrapper max-w-7xl', className)}>
      {children}
      <div className="w-full bottom-0 left-0 md:left-auto absolute h-20 md:h-10 xl:h-14 flex content-center max-w-7xl">
        <p className="w-full text-center md:text-left my-4 text-xl text-gray-500 dark:text-gray-400">
          Ladislav Prix &copy; 2021, <br className="md:hidden block" /> elix78963@gmail.com
        </p>
      </div>
    </div>
  </>
);

export default Content;
