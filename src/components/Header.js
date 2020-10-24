import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { NavBar } from './index';
import { ReactComponent as Logo } from '../assets/logo.svg';

export default function Header() {
  return (
    <NavBar>
      <Link to="/">
        <div className="logo">
          <Logo />
        </div>
      </Link>
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
