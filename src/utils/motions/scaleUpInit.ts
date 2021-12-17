import { intialMotionBase, Motion } from './shared';

const scaleUpInit = (): Motion => ({
  ...intialMotionBase,
  variants: {
    initial: { scale: 0.4, opacity: 0 },
    animate: { scale: 0.9, opacity: 1, transition: { duration: 1.4 } },
  },
});

export default scaleUpInit;
