import '../ReuseComponents/ReuseComponets.css';

// icon
import { FaBookmark } from "react-icons/fa";


// Sử dụng cartContext
import { useContext } from 'react';
import CartContext from '../../../store/cart/CartContext';




export default function CardProduct(props) {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="col">
            <div className="card card-product-body" style={{ width: "15rem", position: "relative" }}>
                <FaBookmark style={{ position: "absolute", fontSize: "50px", Top: "10px", left: "190px", color: "rgb(238, 52, 20)" }}></FaBookmark>
                <p style={{ position: "absolute", Top: "10px", left: "200px", fontSize: "15px", color: "yellow" }}>60%</p>
                <img src="https://allimages.sgp1.digitaloceanspaces.com/photographercomvn/2021/07/6-Cach-chup-hinh-quan-ao-dep-an-tuong.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.nameCard}</h5>
                    <p className="card-text">{props.descriptionCard}</p>
                    <a className="btn btn-primary" onClick={() => addToCart(props)}>Buy</a>
                </div>
            </div>
        </div>
    )
}