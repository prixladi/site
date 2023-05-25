import appearingTextInit from './appearing-text-init';
import scaleUpHover from './scale-up-hover';
import scaleUpInit from './scale-up-init';
import scaleDownInit from './scale-down-init';

const scaleUpVariants = {
  initial: { scale: 0.4, opacity: 0 },
  animate: { scale: 0.9, opacity: 1, transition: { duration: 1.4 } },
};

export { appearingTextInit, scaleUpHover, scaleUpInit, scaleDownInit };

export { scaleUpVariants };
