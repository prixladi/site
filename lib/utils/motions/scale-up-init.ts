import { initialMotionBase } from './shared';

import type { Motion } from './shared';

const scaleUpInit = (): Motion => ({
  ...initialMotionBase,
  variants: {
    initial: { scale: 0.4, opacity: 0 },
    animate: { scale: 0.9, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  },
});

export default scaleUpInit;
