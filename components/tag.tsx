import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Tag: React.FC<Props> = ({ children, className }) => (
  <span className={clsx('rounded-full px-2 py-[1px] pb-[2px] text-sm', className)}>
    {children}
  </span>
);

export default Tag;
