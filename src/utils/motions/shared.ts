import { Variant } from 'framer-motion';
import * as R from 'ramda';

type InitialMotion = {
  initial: 'initial';
  animate: 'animate';
  variants: {
    initial: Variant;
    animate: Variant;
  };
};

type ChildrenInitialMotion = {
  variants: {
    initial: Variant;
    animate: Variant;
  };
};

type WhileHoverMotion = {
  whileHover: 'whileHover';
  variants: {
    whileHover: Variant;
  };
};

const intialMotionBase: {
  initial: 'initial';
  animate: 'animate';
} = {
  initial: 'initial',
  animate: 'animate',
};

const whileHoverMotionBase: {
  whileHover: 'whileHover';
} = {
  whileHover: 'whileHover',
};

type Motion = InitialMotion | ChildrenInitialMotion | WhileHoverMotion;

type CombinedMotion = (Partial<InitialMotion> & Partial<WhileHoverMotion>) | {};

const mergeMotions = (...motions: Motion[]): CombinedMotion => {
  return R.reduce(R.mergeDeepRight, {} as CombinedMotion, motions);
};

export type { Motion, CombinedMotion };
export { mergeMotions, intialMotionBase, whileHoverMotionBase };
