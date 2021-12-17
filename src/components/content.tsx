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
      <div className="footer-wrapper">
        <p className="footer">
          Ladislav Prix &copy; 2021, <br className="md:hidden block" /> elix78963@gmail.com
        </p>
      </div>
    </div>
  </>
);

export default Content;
