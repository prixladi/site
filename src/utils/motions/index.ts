import apearingTextInit from './apearingTextInit';
import scaleUpHover from './scaleUpHover';
import scaleUpInit from './scaleUpInit';
import { mergeMotions } from './shared';

const scaleUpVariants = {
  initial: { scale: 0.4, opacity: 0 },
  animate: { scale: 0.9, opacity: 1, transition: { duration: 1.4 } },
};

export { mergeMotions };
export { apearingTextInit, scaleUpHover, scaleUpInit };

export { scaleUpVariants };
