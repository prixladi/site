import { whileHoverMotionBase } from './shared';

import type { Motion } from './shared';

type ScaleUpHoverOptions = {
  scale: number;
  duration: number;
};

const defaultScaleUpHoverOptions: ScaleUpHoverOptions = { scale: 1.03, duration: 0.25 };

const scaleUpHover = ({
  scale,
  duration,
}: ScaleUpHoverOptions = defaultScaleUpHoverOptions): Motion => ({
  ...whileHoverMotionBase,
  variants: {
    whileHover: { scale, transition: { duration, ease: 'easeOut' } },
  },
});

export { defaultScaleUpHoverOptions };
export default scaleUpHover;
