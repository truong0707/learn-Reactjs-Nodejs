import { SHOW_HIDE_CART, ADD_TO_CART, BACK_DROP_HIDE } from '../Types';

function CartReducer(state, action) {
    switch (action.type) {
        case SHOW_HIDE_CART: {
            return {
                ...state,
                showCart: !state.showCart
            }
        }
        case ADD_TO_CART: {
            // const newCarts = [...state.cartItems, action.payload];
            // const jsonCarts = JSON.stringify(newCarts)

            // return {
            //     ...state,
            //     cartItems: localStorage.setItem('carts', jsonCarts)
                
            // }
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
                
            }
        }
        case BACK_DROP_HIDE: {
            return {
                ...state,
                showCart: false
            }
        }
        default:
            return state;
    }
}

export default CartReducer
