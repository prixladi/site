import { intialMotionBase, Motion } from './shared';

type MotionType = {
  standalone: Motion;
  parent: Motion;
  children: Motion;
};

type AppearingTextInitProps = {
  delayChildren?: number;
};

const defaultAppearingTextInitProps: AppearingTextInitProps = {
  delayChildren: undefined,
};

const apearingTextInit = ({
  delayChildren,
}: AppearingTextInitProps = defaultAppearingTextInitProps): MotionType => ({
  standalone: {
    ...intialMotionBase,
    variants: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0, transition: { duration: 1 } },
    },
  },
  parent: {
    ...intialMotionBase,
    variants: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { staggerChildren: 0.5, delayChildren } },
    },
  },
  children: {
    variants: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0, transition: { duration: 1 } },
    },
  },
});

export { defaultAppearingTextInitProps };
export default apearingTextInit;
