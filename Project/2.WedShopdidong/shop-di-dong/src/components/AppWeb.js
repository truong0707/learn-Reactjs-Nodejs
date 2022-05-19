// import library
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from 'react-router-dom';


// import components
import NavBarApp from './NavBarApp';
import AccessoryPage from './pages/accessoryPage/AccessoryPage';
import './NavBarApp.css';



export default function MyApp() {
  return (
    <>
      <Router>
        <div className='app__web'>
          <div className='nav__bar__app'>
            <NavBarApp />
          </div>

          {/* ai làm page nào thì gán component phù hợp với từng router */}

          <Routes>
            <Route exact path='/' element={"home"} />
            <Route exact path='/phone' element={"Điện Thoại"} />
            <Route exact path='/accessory' element={<AccessoryPage />} />
            <Route exact path='/sua-chua' element={"Sữa chữa"} />
            <Route exact path='/news' element={"Tin tức"} />
            <Route exact path='/tra-cuu' element={"Tra cứu"} />
            <Route exact path='/gio-hang' element={'giỏ hàng'} />
            <Route exact path='/lich-su-bill' element={'lịch sử'} />
            <Route exact path='/24h-congnghe' element={'24 công nghệ'} />
            <Route exact path='/hoi-dap' element={'hỏi đáp'} />
            <Route exact path='/game-app' element={'Game App'} />
          </Routes>


          <div style={{ height: '289px' }} className='container-fluid all__footer__app'>
            <div style={{ width: '92%', marginTop:'15px' }} className='container-fluid wrap__footer__app'>
              <div className='row'>
                <div style={{lineHeight:'21px', fontSize:'15px'}} className='col-xl-3'>
                  <p>Lịch sử mua hàng</p>
                  <p>Cộng tác bán hàng cùng TGDĐ</p>
                  <p>Tìm hiểu vè mua trả góp</p>
                  <p>Chính sách bảo hành</p>
                  <p>Xem thêm</p>
                </div>
                <div className='col-xl-3'>
                  <p>giới thiệu công ty (MWG.vn)</p>
                  <p>Tuyển</p>
                  <p>Lịch sử mua hàng</p>
                  <p>Lịch sử mua hàng</p>
                  <p>Lịch sử mua hàng</p>
                </div>
                <div className='col-xl-2'>1</div>
                <div className='col-xl-3'>2</div>
              </div>

            </div>
          </div>
        </div>
      </Router>
    </>
  )
}
