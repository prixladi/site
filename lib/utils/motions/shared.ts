import { Variant } from 'framer-motion';

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

const initialMotionBase: {
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

export type { Motion };
export { initialMotionBase, whileHoverMotionBase };
