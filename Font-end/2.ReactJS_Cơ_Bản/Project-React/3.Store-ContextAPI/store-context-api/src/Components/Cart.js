import { useContext } from "react"
import CartContext from "../context/cart/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { CartItem } from "./CartItem";

const Cart = () => {
    const  { showCart, cartItems, showHideCart } = useContext(CartContext)

    return (
        <>
        {showCart && (
            <div className="cart__wrapper">
                <div style={{textAlign:'right'}} >
                <FaShoppingCart aria-hidden='true' onClick={showHideCart} />
                </div>

                <div style={{marginTop: "40px"}} className="cart__innerWrapper">
                    {cartItems.length === 0 ? (<h4>Cart is Empty</h4>): (<ul>
                        {cartItems.map(item => (
                            <CartItem key={item._id} item={item} />
                        ))}
                    </ul>)}
                </div>


                {/* <div style={{background:"pink", height:"200px", marginTop: "40px"}} className="Cart__cartTotal">
                    <div>
                        Cart Total
                    </div>
                    <div></div>
                    <div style={{marginLeft:5}}>
                        {formatCurrency(cartItems.reduce((amount,item) => item.price + amount,0), "$")}
                    </div>
                </div> */}
            </div>
        )} 
        </>
    )
}

export default Cart;
