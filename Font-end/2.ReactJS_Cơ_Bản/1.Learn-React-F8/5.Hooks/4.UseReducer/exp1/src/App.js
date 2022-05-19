import './App.css';
import { useReducer } from 'react'
// Bài toán tăng giảm

// Đối với useState
// 1. Imit State: 0
// 2. Action: Tăng (state + 1) / Giảm (State - 1)

// Đối với reducer
// 1. Imit State: 0
// 2. Action: Tăng (state + 1) / Giảm (State - 1)
// 3. Tạo reducer
// 4. Dispatch : là thuật ngữ để kích hoạt 1 Action.




// Tạo init State
const initState = 0;

// Tạo Action
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

// Tạo reducer ==> nó là 1 hàm hoạt dộng dựa trên nguyên tắc là nhận đầu vào(nhận state hiện tại và 1 Action)
// và trả ra đầu ra mới
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1
    case DOWN_ACTION:
      return state - 1
    default:
      throw new Error('Action không hợp lệ')
  }
}





function App() {
  // const [count, setCount] = useState(0)
  const [count, dispatch] = useReducer(reducer, initState)

  return (
    <div className="App">
      <h1>{count}</h1>
      {/* <button onClick={() => setCount(count + 1)}>Tăng</button>
      <button onClick={() => setCount(count - 1)}>Giảm</button> */}

      <button onClick={() => dispatch(UP_ACTION)}>Tăng</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>Giảm</button>
    </div>
  );
}

export default App;
