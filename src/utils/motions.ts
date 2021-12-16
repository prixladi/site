const fadeWrapperVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.5 } },
};

const fadeUpChildVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const scaleDownVariants = {
  initial: { scale: 1.3, opacity: 0 },
  animate: { scale: 0.9, opacity: 1, transition: { duration: 1.4 } },
};

const scaleUpVariants = {
  initial: { scale: 0.4, opacity: 0 },
  animate: { scale: 0.9, opacity: 1, transition: { duration: 1.4 } },
};

const scaleUpTinyWhileHoverVariants = (scale: number = 1.07) => ({
  whileHover: { scale: scale, transition: { duration: 0.5 } },
});

const scaleUpMediumAndFastWhileHoverVariants = {
  whileHover: { scale: 1.2, transition: { duration: 0.5 } },
};

export {
  fadeWrapperVariants,
  fadeUpChildVariants,
  scaleDownVariants,
  scaleUpVariants,
  scaleUpTinyWhileHoverVariants,
  scaleUpMediumAndFastWhileHoverVariants,
};
