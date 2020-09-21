import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div 
      className="home container"
      animate={{ marginTop: "50px", opacity: .8 }}
    >
      <motion.h2
	animate={{ color: "#ff2994", fontSize: "50px", x: 0, y: -50 }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button 
	  animate={{ scale: 1.2 }}
	>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}
