import React from 'react';
import { motion } from 'framer-motion';
// Container
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
      // complete this one, then the child
      when: "beforeChildren",
      // to avoid the delay
      mass: .4,
      // 0 (high oscilation) <----> 10+ (low oscilation)
      damping: 8,
      // time between the childs
      staggerChildren: .6
    }
  }
}
// Children
const childrenVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

export default function Order({ pizza }) {
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childrenVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childrenVariants}>
        {pizza.toppings.map(topping =>
          <div key={topping}>
            {topping}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
