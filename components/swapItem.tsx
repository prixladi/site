import clsx from 'clsx';

type Props = {
  children?: React.ReactNode;
  className?: string;
  isIn: boolean;
};

const style = { transformOrigin: '50% 100px' };
const SwapItem: React.FC<Props> = ({ children, className, isIn }) => (
  <span
    className={clsx(
      'absolute inset-0 text-black dark:text-white transform transition-transform duration-700',
      {
        'rotate-90': isIn,
        'rotate-0': !isIn,
      },
      className,
    )}
    style={style}
  >
    {children}
  </span>
);

export default SwapItem;
