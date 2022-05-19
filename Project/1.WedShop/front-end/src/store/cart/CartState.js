import React, { useReducer } from 'react';
import CartContext from './CartContext'; // sử dụng CartContext
import CartReducer from './CartReducer';
import { SHOW_HIDE_CART, ADD_TO_CART, BACK_DROP_HIDE } from '../Types';


export default function CartState({ children }) {

    
    // const storageCart = JSON.parse(localStorage.getItem('carts'));

    // const initalState = {
    //     showCart: false,
    //     cartItems: storageCart
    // }

    ////////////////////////////

    // khởi tạo State
    const initalState = {
        showCart: false,
        cartItems: []
    }
    


    const [stateCart, dispatch] = useReducer(CartReducer, initalState);
    
    /* Xử lý show/hide Cart */
    const showHideCart = () => {
        dispatch({
            type: SHOW_HIDE_CART
        })
    }

    /* Xử lý Add Cart */
    const addToCart = (item) => {
        dispatch(
            {
                type: ADD_TO_CART,
                payload: item,
            }
        )
    }

    /* Xử lý background ngoài khi mở Cart */
    const backDropHide = () => {
        dispatch(
            {
                type: BACK_DROP_HIDE,
            }
        )
    }





    return (
        <CartContext.Provider
            value={{
                showCart: stateCart.showCart,
                showHideCart,
                cartItems: stateCart.cartItems,
                addToCart,
                backDropHide
            }}>
            {children}
        </CartContext.Provider>
    )
}
