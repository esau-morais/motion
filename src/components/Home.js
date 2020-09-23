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
      <motion.h2
	animate={{}}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button 
	  animate={{}}
	>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}
