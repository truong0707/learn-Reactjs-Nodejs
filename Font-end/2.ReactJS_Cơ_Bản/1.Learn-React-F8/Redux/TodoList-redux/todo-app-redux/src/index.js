import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Sử dụng store
import store from './Redux/store'
//  context api 
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,document.getElementById('root'));