import { initialMotionBase, Motion } from './shared';

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

const appearingTextInit = ({
  delayChildren,
}: AppearingTextInitProps = defaultAppearingTextInitProps): MotionType => ({
  standalone: {
    ...initialMotionBase,
    variants: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.45 } },
    },
  },
  parent: {
    ...initialMotionBase,
    variants: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren } },
    },
  },
  children: {
    variants: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.45 } },
    },
  },
});

export { defaultAppearingTextInitProps };
export default appearingTextInit;
