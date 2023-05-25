import clsx from 'clsx';

import PageSEO from './page-seo';

type Props = {
  children: React.ReactNode;
  title: string;
  type: 'wide' | 'medium';
};

const Content = ({ children, title, type }: Props) => (
  <>
    <PageSEO title={title} />
    <div
      className={clsx('m-auto pt-8 md:pt-16 lg:pt-28 xl:pt-32 px-4 md:px-10 pb-24 md:pb-20', {
        'max-w-7xl': type === 'wide',
        'max-w-4xl': type === 'medium',
      })}
    >
      {children}
      <div
        className={clsx(
          'w-full md:w-fit bottom-0 left-0 md:left-auto absolute h-20 md:h-10 lg:h-14 flex content-center',
          {
            'max-w-7xl': type === 'wide',
            'max-w-4xl': type === 'medium',
          },
        )}
      >
        <p className="w-full md:w-fit text-center md:text-left my-4 text-xl text-gray-500 dark:text-gray-400 pb-4">
          Ladislav Prix &copy; 2021, <br className="md:hidden block" /> elix78963@gmail.com
        </p>
      </div>
    </div>
  </>
);

export default Content;
