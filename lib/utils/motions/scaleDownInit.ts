import { initialMotionBase, Motion } from './shared';

const scaleDownInit = (): Motion => ({
  ...initialMotionBase,
  variants: {
    initial: { scale: 1.5, opacity: 0 },
    animate: { scale: 0.9, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  },
});

export default scaleDownInit;
