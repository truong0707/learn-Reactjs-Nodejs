
/* Page */
import CartDrawerToggle from "./CartDrawer/CartDrawerToggle";
import { Link } from 'react-router-dom'
import './NavBar.css';

/* Icon */
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";

//
import { useContext } from 'react';
import CartContext from "../store/cart/CartContext";




export default function NavBar(props) {
    const { cartItems } = useContext(CartContext);

    return (
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div className="faBar" >
                    <DrawerToggleButton drawerToggleClick={props.drawerToggleClick} />
                </div>

                {/* LOGO Nav */}
                <div style={{ marginLeft: "15px" }}><Link className="toolbar__logo" to="/"><b>Logo</b></Link></div>


                <div className="spacer"></div>

                <div className="toolbar__navigation-items">
                    <ul>
                        <li>
                            <Link className="item__bar" to="/">Home</Link>
                        </li>

                        <li>
                            <Link className="item__bar" to="/shop">Shop</Link>
                        </li>

                        <li>
                            <Link className="item__bar" to="/blog">Blog</Link>
                        </li>

                        <li>
                            <Link className="item__bar" to="/news">News</Link>
                        </li>

                        <li>
                            <Link className="item__bar" to="/contacts">Contacts</Link>
                        </li>

                        
                        <li>
                            <Link className="item__bar" to="/admin">Contacts</Link>
                        </li>
                    </ul>
                    
                </div>

                <div className="spacer"></div>

                <div className="toolbar__navigation-user-store">
                    <ul>
                        <li>
                            {/* cart */}
                            <a className="item__bar" style={{ cursor: 'pointer' }} >
                                <CartDrawerToggle />
                                {cartItems.length > 0 && <div className='item__count'>
                                    <span><b>{cartItems.length}</b></span>
                                </div>}
                            </a>
                        </li>

                        <li>
                            <Link className="item__bar" to="/contancts">Sign in</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    );
}