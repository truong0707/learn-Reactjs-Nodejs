import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

// sử dungkj cartContext
import { useContext } from 'react';
import CartContext from '../../store/cart/CartContext';

export default function CartDrawerToggle() {
    const { showHideCart } = useContext(CartContext);

    
    return (
        <>
            <p style={{fontSize: "22px"}}  ><FaShoppingCart onClick={showHideCart} /> </p>
        </>
    )
}
