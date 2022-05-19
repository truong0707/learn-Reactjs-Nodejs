
/* Import Page */
import HeaderShopPage from "./HeaderShopPage";
import BodyShopPage from "./BodyShopPage";
import './ShopPage.css'

export default function ShopPage() {

    return (
        <div className="container-fluid all-shop-page">
            <div className="header-shop-page"><HeaderShopPage/></div>
            <div className="body-shop-page"><BodyShopPage/></div>
        </div>
    );
}