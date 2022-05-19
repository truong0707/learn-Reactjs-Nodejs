import React from 'react';
import { useContext } from 'react';
import CartContext from '../../../store/cart/CartContext';
import './ProductCartPage.css'


{/* {cartItems.map((item => (
          <h1 style={{ color: 'red' }}>{item.nameCard}dddd</h1>
        )))} */}


export default function ProductCartPage() {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems)

  return (
    <div style={{ background: '#FAFAFA' }}>
      <p className='space-top' style={{ height: '40px' }}></p>

      <div className='container page__productCart'>
        <div style={{ height: '40px', marginTop: '40px', background: '#fff' }}>
          <p style={{ lineHeight: '35px', marginLeft: '10px' }}>bạn đang có {cartItems.length} sản phẩm trong giỏ hàng</p>
        </div>

        {cartItems.map((item, index) => (
          <div key={index} style={{ height: '85px', background: '#fff', marginTop: '20px' }}>
            <div className='row'>
              <div className='col-xl-6'>
                <div className='row'>
                  <img className='col-xl-3' style={{ height: '85px', width: '21%' }} src='https://cf.shopee.vn/file/13ce15c1eb14b38739ec84d55046f313' />
                  <div className='col'>
                    <p>{item.nameCard}</p>
                    <p>{item.descriptionCard}</p>
                  </div>
                </div>

              </div>

              <div className='col-xl-2'>
                <div className='row' style={{ marginTop: '25px', border: '1px solid #FAFAFA', width: '80%', height: '32px' }}>
                  <button className='col-xl btn-count-product' style={{ height: '30px', textAlign: 'center' }}><b>-</b></button>
                  <p className='col-xl'>10</p>
                  <button className='col-xl btn-count-product' style={{ height: '30px', textAlign: 'center', fontSize: '12px' }}><b>+</b></button>
                </div>
              </div>

              <div className='col-xl-2' style={{ lineHeight: '80px' }}>280,000₫</div>
              <div className='col-xl-2' style={{ lineHeight: '80px' }}>30,800,000đ</div>
            </div>
          </div>
        ))}
      </div>

    </div>

  )
}
