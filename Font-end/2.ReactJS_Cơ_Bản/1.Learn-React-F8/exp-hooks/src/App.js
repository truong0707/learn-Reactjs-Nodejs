import './App.css';
// 1. Random gift
// Ứng dụng nhận phần thưởng
// Mô tả : khi vào trang thì xuất hiện chưa có phần thưởng và có nút lấy thưởng , khi click vào nút lấy thưởng thì nó sẽ 
// hiện random ra 3 phần thưởng đã cho. Khi tiếp tục bấm lấy thưởng thì nó sẽ tiếp tục ngẫu nhiên lấy ra cá phần thưởng ở trong mảng thay thế vào

import { useState } from 'react';

const gifts = [
  'CPU i9',
  'RAM 32GB RGB',
  'RGB KeyBoard',
]


function App() {
  
  const [gift, setGift] = useState()

  function handleRandomGift(){
   const indexGifts = Math.floor(Math.random() * gifts.length)
   // Math.floor : lấy số nguyên 

  //  console.log(gifts[indexGifts]); // lấy index để truy cập vào mảng

  // dùng setGift để set phần thưởng này vào
  setGift(gifts[indexGifts]) 
  }

  return (
    <div className="App">
      <h1>{gift || 'Chưa có phần thưởng'}</h1> {/*  nếu có gift thì hiển thị ko có gift hiển thì ra chưa có phần thưởng */}
      <button onClick={handleRandomGift}>Lấy thưởng</button> 
    </div>
  );
}



///////////////////////////////////////////////////////////////////////////////////



// 2. Two-way Binding // Ràng buộc 2 chiều // thường để sử lý form
// thứ nhất là chiều tương tác trên giao diện, thứ hai là chiều  dữ liệu

// function App() {
//   const [name, setName] = useState('')

//   console.log(name)
//   return (
//     <div className="App">
//      <input value={name} onChange={e => setName(e.target.value)}/>
//      <button onClick={() => setName('Nguyễn Văn B')}>Change</button>
//     </div>
//   );
// }



/////////////////////////////////////////////////////////////////////


    
/*   Ứng dụng thực tế về ràng buộc  2 chiều */
// Xử lý form

// function App() {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')

//   const handleSubmit = () => {
//     //  Call api Từ dữ liệu trong Form
//     console.log(
//       {
//         name,
//         email
//       }
//     )
//   }

//   return (
//     <div className="App">
//      <input value={name} onChange={e => setName(e.target.value)}/>
//      <input value={email} onChange={e => setEmail(e.target.value)}/>
//      <button onClick={handleSubmit}>Register</button>
//     </div>
//   );
// } // 13.52
export default App;
