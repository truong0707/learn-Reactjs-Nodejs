import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//
import CartState from './store/cart/CartState';
import ProductsBlogState from './store/productsBlog/ProductsBlogState';
import CardState from './store/cardProducts/CardState';

ReactDOM.render(
  <React.StrictMode>
    <CardState>
      <ProductsBlogState>
        <CartState>
          <App />
        </CartState>
      </ProductsBlogState>
    </CardState>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
