import './App.css';
// 1.import UseState
import { useState } from 'react'

// function App() {
//   const [counter, setCounter] = useState(1) //đối số trong use State là initial (giá trị khởi tạo)

//   // Hàm sử lý tăng
//   const handleIncrease = () => {
//     setCounter(counter + 1) // set lại giá trị bằng ía trị cũ trừ đi giá trị mới
//   }
//   return (

//     <div className="App">

//       <h1>{counter}</h1>  {/* số 1 sẽ đc lưu vào thằng counter */}
//       <button onClick={handleIncrease}>Tăng lên</button>
//     </div>
//   );
// }




// const orders = [100, 200, 300] // giả sử có 3 giá tiền của của 1 vài sản phẩm

// function App() {

//   // Làm tính toán tiền và lấy tổng tiền làm giá trị khởi tạo
//   const total = orders.reduce((total, cur) => total + cur)

//   // truyền call back cho useState
//   const [counter, setCounter] = useState(() => {
//     return total
//   }) //đối số trong use State là initial (giá trị khởi tạo)

//   // Hàm sử lý tăng
//   const handleIncrease = () => {
//     // setCounter(counter + 1) // set lại giá trị bằng ía trị cũ trừ đi giá trị mới

//     // set state với call back
//     setCounter(prevState => prevState + 1) // giá trị trc đó return về giá trị mới
//     setCounter(prevState => prevState + 1) // giá trị trc đó return về giá trị mới
//     setCounter(prevState => prevState + 1) // giá trị trc đó return về giá trị mới

//     // call back nó là hàm thì nó sẽ trả cho call back này 1 đối số là các giá trị trước đó của state(giá trị hiện tại của state)
//   }
//   return (

//     <div className="App">

//       <h1>{counter}</h1>  {/* số 1 sẽ đc lưu vào thằng counter */}
//       <button onClick={handleIncrease}>Tăng lên</button>
//     </div>
//   );
// }







//  Set state là thay thế state bằng giá trị mới
// bài toán thay đổi thông tin người dùng

function App() {
  const [info, setInfo] = useState({
    name: 'Nguyên Thanh Trường',
    age: 18,
    address: 'Da Nang, VN'
  })

  const handleUpdate = () => {
    setInfo({
      ...info, // thêm giá trị vào: áp dụng toán tử es6     dẩy pẩy : thêm thằng bio vào
      bio: 'Yêu màu hồng ^^'
    })


  /*   setInfo(prev => {
      // Xử ký logic

      return {
        ...prev,
        bio: 'yêu màu hồng'
      }
    }) */


  }

  return (
    <div className="App">
      <h1>{JSON.stringify(info)}</h1>  {/* chuyển obj về dang chuổi*/}
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}




export default App;








/* Sử dung useState
bài toán: Làm ứng dụng đếm số nó sẽ bắt đầu đém từ số 1 , có  1 nút bấm và nút đó tăng dần lên 2, 3, 4, 5
=> Dữ liệu thay đổi , giao diện thay đổi theo = > sử dụng use state
*/


//   
/* 
- Component đc render sau khi setState
- Initial state chỉ dùng cho 1 lần
- Set State với callback
- Set state là thay thế state bằng giá trị mới
*/