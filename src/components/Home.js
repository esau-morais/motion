import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Variants
// Button
import { buttonVariants } from '../utils/variants';
// Container
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: .4,
      duration: .6
    },
    exit: {
      x: '-100vw',
      transition: {
        ease: 'easeInOut'
      }
    }
  }
}

export default function Home() {
  // const [showTitle, setShowTitle] = useState(true);
  // Don't show the title after 4s
  // setTimeout(() => setShowTitle(false), 2500)

  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      /* from */
      initial="hidden"
      /* to */
      animate="visible"
      exit="exit"
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          /* hover animation */
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}
