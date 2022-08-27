import appearingTextInit from './appearingTextInit';
import scaleUpHover from './scaleUpHover';
import scaleUpInit from './scaleUpInit';
import scaleDownInit from './scaleDownInit';
import { mergeMotions } from './shared';

const scaleUpVariants = {
  initial: { scale: 0.4, opacity: 0 },
  animate: { scale: 0.9, opacity: 1, transition: { duration: 1.4 } },
};

export { mergeMotions };
export { appearingTextInit, scaleUpHover, scaleUpInit, scaleDownInit };

export { scaleUpVariants };
