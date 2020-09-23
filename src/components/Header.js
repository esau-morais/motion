import React from 'react';
import { motion } from 'framer-motion';

import { NavBar } from './index';

export default function Header() {
  return (
    <NavBar>
      <div className="logo">
        <svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </svg>
      </div>
      <motion.div
	className="title"
	/* from */
	initial={{ y: -150 }}
	/* to */
	animate={{ y: -10 }}
	/* transition from... to */
	transition={{ delay: .2, type: 'spring', stiffness: 100 }}
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </NavBar>
  )
}
