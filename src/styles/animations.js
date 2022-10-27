export const containerSlideInOutLeft = {
  initial: {
    x: "-100vw",
    transition: {
      duration: 0.75,
    },
  },
  animate: {
    x: "0vw",
    transition: {
      duration: 0.75,
      //when: "beforeChildren",
    },
  },
};

export const containerSlideInOutRight = {
  initial: {
    x: "100vw",
    transition: {
      duration: 0.75,
    },
  },
  animate: {
    x: "0vw",
    transition: {
      duration: 0.75,
      //when: "beforeChildren",
      //staggerChildren: 1,
    },
  },
};

export const rotateInOut = {
  initial: {
    //x: "-100vw",
    //scale: 1,
    rotate: -360,

    transition: {
      delay: 0,
      duration: 1,
    },
  },
  animate: {
    //x: "0vw",
    //scale: 1,
    rotate: 0,
    transition: {
      delay: 0,
      duration: 1,
    },
  },
};

export const fadeInOut = {
  initial: {
    opacity: 0,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

export const elementSlideInOut = {
  initial: {
    x: "-100vw",
    transition: {
      duration: 1,
      delay: 1,
    },
  },
  animate: {
    x: "0vw",
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

export const slideDown = {
  initial: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1,
    },
  },
};
export const bounceDown = {
  initial: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.5,
      delay: 1,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1,
      type: "spring",
      mass: 0.6,
      damping: 5,
    },
  },
};

export const selection = {
  initial: {
    opacity: 0,
    y: 100,
    transition: {
      //delay: 2,
      duration: 0.5,
      type: "spring",
      mass: 0.5,
      damping: 5,
      staggerChildren: 1,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      //delay: 1,
      type: "spring",
      mass: 0.5,
      damping: 5,
      staggerChildren: 1,
    },
  },
};
export const bounceUp = {
  initial: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1,
      type: "spring",
      mass: 0.5,
      damping: 5,
    },
  },
};
export const slideUp = {
  initial: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1,
    },
  },
};

export const scaleUpRight = {
  initial: {
    opacity: 0,
    x: "-25vw",
    scale: 0,
    transition: {
      duration: 1,
    },
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      delay: 1,
    },
  },
};

export const slideLeft = {
  initial: {
    opacity: 0,
    x: "50vw",
    transition: {
      duration: 1,
    },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 1,
      // type: "spring",
      // mass: 0.6,
      // damping: 5,
    },
  },
};

export const slideRight = {
  initial: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 1,
      type: "spring",
      mass: 0.6,
      damping: 5,
    },
  },
};
export const detailPopUp = {
  initial: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 0.75,
    },
  },
};

export const navVariants = {
  hidden: {
    y: "-10vw",
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0.5,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.5,
    },
  },
};

//SPLASH PAGE VARIANTS
export const splashVariants = {
  initial: { opacity: 1 },
  // animate: {
  //   opacity: 1,
  //   transition: {
  //     duration: 5,
  //   },
  // },
  exit: {
    opacity: 0,
    transition: {
      delay: 0,
      duration: 2,
    },
  },
};

//HOME PAGE VARIANTS
export const homeVariants = {
  initial: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 1,
    scale: 3,
    transition: {
      delay: 0.5,
      duration: 2,
    },
  },
};

export const headerVariants = {
  initial: {
    x: "-50vw",
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 2,
    },
  },
};

export const subheaderVariants = {
  initial: {
    x: "-100vw",
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 2,
    },
  },
};

export const imageVariants = {
  initial: {
    x: "50vh",
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 2.5,
      duration: 1,
    },
  },
  // exit: {
  //   opacity: 1,
  //   scale: 3,
  //   transition: {
  //     delay: 0.5,
  //     duration: 2,
  //   },
  // },
};

export const buttonVariants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 2.5,
      duration: 1.5,
    },
  },
};

//ABOUT PAGE VARIANTS
export const aboutVariants = {
  // initial: { opacity: 0 },
  // animate: {
  //   opacity: 1,
  //   transition: {
  //     duration: 0.5,
  //   },
  // },
  initial: {
    x: "-50vw",
    rotate: -45,
    opacity: 0,
    transition: {
      duration: 0.75,
    },
  },
  animate: {
    x: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};

//EXPERIENCE PAGE VARIANTS
export const experienceVariants = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      duration: 2.5,
    },
  },
};

//CONTACT PAGE VARIANTS
export const planeVariants = {
  planeinitial: { opacity: 1, x: "-50px", y: "-50px" },
  planeanimate: {
    opacity: 1,
    x: [null, -30, 0, 25, 0],
    y: [null, -30, 0, 25, 0],
    rotateZ: [null, 10, 0, -10, 0],
    transition: {
      duration: 3,
      //times: [0, 0.5, 1],
      repeat: Infinity,
      ease: "linear",
    },
  },

  animationOne: {
    opacity: 1,
    x: [-100, 0],
    y: [-100, 0],
    transition: {
      x: {
        duration: 0.75,
        repeat: Infinity,
        ease: "easeOut",
      },
      y: {
        duration: 0.75,
        repeat: Infinity,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    opacity: 1,
    x: [-500, 0],
    y: [-500, 0],
    transition: {
      x: {
        duration: 2,
        repeat: Infinity,
        ease: "easeOut",
      },
      y: {
        duration: 2,
        repeat: Infinity,
        ease: "easeOut",
      },
    },
  },
};

export const flyIn = {
  initial: {
    opacity: 1,
    scale: 4,
    x: "-110vw",
    y: "60vh",
    transition: {
      duration: 2,
    },
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: "0vw",
    y: "0vh",
    transition: {
      duration: 2,
    },
  },
};

export const trailVariants = {
  initial: {
    opacity: 0,
    transition: {
      delay: 2,
      duration: 1.5,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1.5,
    },
  },
};