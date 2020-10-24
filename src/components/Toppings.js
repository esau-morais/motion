import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Container
import { containerVariants } from '../utils/variants';
// Button
import { buttonVariants } from '../utils/variants';


export default function Toppings({ addTopping, pizza }) {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div
      className="toppings container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
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
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={buttonVariants}
          /* hover animation */
          whileHover="hover"
        >
          Order
        </motion.button>
      </Link>
    </motion.div>
  )
}
