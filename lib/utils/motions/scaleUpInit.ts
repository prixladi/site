import { intialMotionBase, Motion } from './shared';

const scaleUpInit = (): Motion => ({
  ...intialMotionBase,
  variants: {
    initial: { scale: 0.4, opacity: 0 },
    animate: { scale: 0.9, opacity: 1, transition: { duration: 0.9, ease: 'easeInOut' } },
  },
});

export default scaleUpInit;