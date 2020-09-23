import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Base({ addBase, pizza }) {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      /* from */
      initial={{ x: '100vw' }}
      /* to */
      animate={{ x: 0 }}
      /* transition from... to */
      transition={{ type: 'spring', delay: .2 }}
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div 
	  className="next"
	  initial={{ opacity: 0 }}
	  animate={{ opacity: 1 }}
	  transition={{ delay: .2 }}
	>
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}
