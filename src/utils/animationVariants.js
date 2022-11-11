/* Animation for page sections
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
