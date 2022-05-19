import './ProductCard.css'

// sử dụng card context 
import CartContext from '../context/cart/CartContext';
import { useContext } from 'react';

const ProductCard = ({ Product }) => {
    const { addToCart } = useContext(CartContext)
    console.log(Product)


    return (
        <div className='productCard__wrapper'>
            <img className='productCard__img' src={Product.image} alt='' />
            <h4>{Product.name}</h4>
            <div className='productCard__price'>{Product.price}</div>
            <button className='ProductCard__button' onClick={() => addToCart(Product)}>Add to basket</button>
        </div>
    );
};

export default ProductCard;