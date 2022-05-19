import React from 'react';
import { useContext } from 'react';
import './CartItem.css';
import CartContext from '../context/cart/CartContext';



export const CartItem = ({item}) => {
    const { removeItem } = useContext(CartContext);

  return <li className='CartItem__item'>
      <img src={item.image} alt='' />

      <div>
          {item.name} {item.price + '$'}
          <button className='CartItem__button' onClick={() => removeItem(item.id)}>Remove</button>
      </div>
  </li>;
};
