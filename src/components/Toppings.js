import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
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
  }
}

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
          /* hover animation */
          whileHover={{
            scale: 1.2,
            boxShadow: '0 0 0.5rem whitesmoke'
          }}
        >
          Order
        </motion.button>
      </Link>
    </motion.div>
  )
}
