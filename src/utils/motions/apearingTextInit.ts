import { intialMotionBase, Motion } from './shared';

type MotionType = {
  parent: Motion;
  children: Motion;
};

const apearingTextInit = (): MotionType => ({
  parent: {
    ...intialMotionBase,
    variants: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { staggerChildren: 0.5 } },
    },
  },
  children: {
    variants: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0, transition: { duration: 1 } },
    },
  },
});

export default apearingTextInit;
