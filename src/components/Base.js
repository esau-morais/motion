import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Variants will replace the object used in the props "initial" and "animate"
// Container
import { containerVariants } from '../utils/variants';
// Button
import { buttonVariants } from '../utils/variants';
// Next
const nextVariants = {
  hidden: {
    opacity: 0
  },
  visible:{
    opacity: 1,
    transition: {
      delay: .2
    }
  }
}

export default function Base({ addBase, pizza }) {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      /* variants */
      variants={containerVariants}
      /* from */
      /* using variants: "initial" and "animate"
        receives a string instead an object
      */
      initial="hidden"
      /* to */
      animate="visible"
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              /* hover animation */
              whileHover={{
                originX: 0,
                scale: 1.1,
                color: '#FBF4B4'
              }}
              /* smooth transition */
              transition={{
                type: 'spring',
                stiffness: 300
              }}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div
      	  className="next"
          variants={nextVariants}
          /* we don't need to pass the "initial" and "animate" props here,
             once variants can manipulate the children on the DOM
          */
	        initial="hidden"
	        animate="visible"
	      >
          <Link to="/toppings">
            <motion.button
              variants={buttonVariants}
              /* hover animation */
              whileHover="hover"
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}
