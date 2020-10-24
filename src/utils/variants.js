// Container
export const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    // we don't need to pass the "transition" prop anymore
    // once is embed in "visible"
    transition: {
      type: 'spring',
      delay: .2
    }
  },
  exit: {
   x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

// Button
export const buttonVariants = {
  hover: {
    // Keyframe → animate each one of these elements
    // scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
    scale: 1.1,
    boxShadow: '0 0 0.5rem whitesmoke',
    transition: {
      // how many keyframes do you wanna apply
      // if wanna inifinite times: Infinity
      yoyo: 3,
      duration: .28
    }
  }
}
