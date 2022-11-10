/**
 * Animation for page sections and buttons
 * @author [Ekaterina Cratcha](https://github.com/cratcha) */

export const sectionVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: 'spring',
      delay: 0.2,
      duration: 3,
    },
  },
};

export const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: '0 0 20px rgba(236,30,123,0.5)',
  },
};
