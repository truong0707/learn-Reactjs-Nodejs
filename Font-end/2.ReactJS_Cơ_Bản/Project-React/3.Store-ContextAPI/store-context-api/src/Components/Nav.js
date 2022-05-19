import './Nav.css'
import { FaShoppingCart } from "react-icons/fa";



import CartContext from '../context/cart/CartContext'; // sử dụng CartContext mà ta tạo khi nãy
import { useContext } from 'react'; // sử dụng hook useContext để lấy dữ liệu từ CartContext (trong này có cosumer) 

const Nav = () => {

    //khai báo 2  biến lấy từ bên props value của Provider
    const { cartItems, showHideCart } = useContext(CartContext)


    return (
        <nav>
            <div className="nav__left">Store</div>
            <div className="nav__middle">
                <div className='text'>
                    <i className='fas fa-search' />
                </div>
            </div>

            <div className='nav__right'>
                <div className='cart__icon'>
                    <FaShoppingCart aria-hidden='true' onClick={showHideCart} />

                    {cartItems.length > 0 && <div className='item__count'>
                        <span>{cartItems.length}</span>
                    </div>}
                </div>
            </div>
        </nav>
    )
}

export default Nav;
