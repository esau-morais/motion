import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      className="home container"
      /* from */
      initial={{ opacity: 0 }}
      /* to */
      animate={{ opacity: 1 }}
      /* transition from... to */
      transition={{ delay: .4, duration: .6 }}
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          /* hover animation */
          whileHover={{
            scale: 1.2,
            boxShadow: '0 0 0.5rem whitesmoke'
          }}
      	>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}
