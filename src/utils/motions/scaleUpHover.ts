import { whileHoverMotionBase, Motion } from './shared';

type ScaleUpHoverOptions = {
  scale: number;
  duration: number;
};

const defaultScaleUpHoverOptions: ScaleUpHoverOptions = { scale: 1.07, duration: 0.75 };

const scaleUpHover = ({
  scale,
  duration,
}: ScaleUpHoverOptions = defaultScaleUpHoverOptions): Motion => ({
  ...whileHoverMotionBase,
  variants: {
    whileHover: { scale, transition: { duration, ease: 'easeInOut' } },
  },
});

export { defaultScaleUpHoverOptions };
export default scaleUpHover;
