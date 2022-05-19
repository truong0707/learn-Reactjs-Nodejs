// sử dụng dữ liệu từ file data
import products from '../data'
import './HomeScreen.css';
import ProductCard from '../Components/ProductCard';





const HomeScreen = () => {
    return (
        <div className='products__wrapper'>
            {products.map((product) => (
                <ProductCard key={product.id} Product={product} />
            ))}
            
        </div>
    )
}

export default HomeScreen