import type { MouseEventHandler, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  ariaLabel: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}>;

const SwapableButton: React.FC<Props> = ({ children, ariaLabel, onClick }) => (
  <button
    aria-label={ariaLabel}
    type="button"
    className="border-gray-500 hover:border-black dark:border-gray-500 dark:hover:border-white duration-500 inline-flex items-center justify-center p-1 h-12 w-12 border-[3px] rounded-full overflow-hidden"
    onClick={onClick}
  >
    <div className="relative w-6 h-6">{children}</div>
  </button>
);

export default SwapableButton;
