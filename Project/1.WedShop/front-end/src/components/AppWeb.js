import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

//
import HomePage from "./Pages/Home/HomePage";
import ShopPage from "./Pages/Shop/ShopPage";
import BlogPage from "./Pages/Blog/BlogPage";
import NewsPage from "./Pages/News/NewsPage";
import ContactsPage from "./Pages/Contacts/ContactsPage";
import WomenClothing from "./Pages/ProductPage/WomenClothing";
import MenClothing from "./Pages/ProductPage/MenClothing";
import ProductCart from './Pages/ProductsCartPage/ProductCartPage';
import Admin from "./Admin";



// import HeaderApp from "./HeaderApp";
import NavBar from "./NavBar";
import SideDrawer from "./SideDrawer/SideDrawer";
import BackDrop from '../components/BackDrop/BackDrop.js'
import Footer from './FooterApp';
import CartDrawer from "./CartDrawer/CartDrawer";
import '../components/Pages/Home/HomePage.css';
import './AppWeb.css';

//

import { useState } from 'react';

export default function AppWeb() {
    /* xử lý đóng mở thanh menu nav */
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    const handleOpenDrawerToggleClick = () => {
        setSideDrawerOpen((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        });
    }

    const handleCloseDrawerToggleClick = () => {
        return setSideDrawerOpen(false)
    }

    let sideDrawer;
    let backDrop;

    if (sideDrawerOpen) {
        sideDrawer = <SideDrawer />
        backDrop = <BackDrop HandleCloseDrawerToggleClick={handleCloseDrawerToggleClick} />
    }

    return (
        <Router>
            <div className="app-wed">
                <div className="nav-bar-app">
                    <NavBar
                        drawerToggleClick={handleOpenDrawerToggleClick}
                    />
                    {sideDrawer}
                    {backDrop}
                </div>

                {/* giao diện giỏ hàng  */}
                <CartDrawer />

                <Routes>
                    <Route exact path="/admin" element={<Admin/>} />
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/shop" element={<ShopPage />} />
                    <Route exact path="/blog" element={<BlogPage />} />
                    <Route exact path="/news" element={<NewsPage />} />
                    <Route exact path="/contacts" element={<ContactsPage />} />
                    <Route exact path="/login" element={<NewsPage />} />

                    {/* Page Product */}
                    <Route exact path="/shop/women's-clothing" element={<WomenClothing />} />
                    <Route exact path="/shop/men's-clothing" element={<MenClothing />} />
                    <Route exact path="/product-cart" element={<ProductCart />}></Route>
                    <Route exact path="/blog/cc" element={"ssss"}></Route>
                </Routes>

                {/* Footer Page */}
                <Footer />
            </div>

        </Router>
    );
}










// class AppWeb extends Component {
//   state = {
//     sideDrawerOpen: false,
//   }

//   handleOpenDrawerToggleClick = () => {
//     this.setState(prevState => {
//       return { sideDrawerOpen: !prevState.sideDrawerOpen }
//     })
//   }

//   handleCloseDrawerToggleClick = () => {
//     this.setState({ sideDrawerOpen: false })
//   }

//   render() {
//     let backdrop
//     let sideDrawer

//     if (this.state.sideDrawerOpen) {
//       backdrop = <BackDrop HandleCloseDrawerToggleClick={this.handleCloseDrawerToggleClick} />
//       sideDrawer = <SideDrawer />
//     }
//     return (
//       <>
//         <NavBar drawerToggleClick={this.handleOpenDrawerToggleClick} />
//         {sideDrawer}
//         {backdrop}
//         <Footer/>
//       </>
//     )
//   }
// }
// export default AppWeb