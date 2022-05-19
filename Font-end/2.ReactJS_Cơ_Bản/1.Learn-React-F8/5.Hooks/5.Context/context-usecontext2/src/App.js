import './App.css';
import Content from './Content';
/////////////////////////
import { useState, createContext } from 'react';  // 1. import createContext để tạo context
export const ThemeContext = createContext() // 1.1 khai báo 1 context với phương thức tạo context
// 1.2 Exprort Context ra ngoài để sử dụng 
console.log(ThemeContext) // ==> console.log ra ta thấy bên trong có 2 hàm Consumer và Provider



// Bài toán tạo Theme : Dark / Light
// Context => 3 bước
// 1. Create Context
// 2. Provider (cung cấp dữ liệu)
// 3. Consumer (nhận dữ liệu từ thằng cung cấp)

//    CompA                 --> CompB                  --> CompC
// (use Provider)           (use Consumer)             (use Consumer)
// Truyền từ dữ liệ từ A ---> các Comp con 




function App() {
  const [theme, setTheme] = useState('dark')


  const toggleTheme = () => {
    setTheme(theme === 'dart' ? 'light' : 'dart') // nếu theme = dart thì sẽ đổi thành light, nếu light -> dart
  }

  return (
    <ThemeContext.Provider value={theme}> {/* Sử sụng Provider của context để cho có thể truyền dữ liệu cho các con  */}
      <div style={{ padding: 20 }}>
        <button onClick={toggleTheme}>Toggle theme</button>
        <Content />
      </div>
    </ThemeContext.Provider> /* Provider nó sẽ cung cấp 1 cái props tên là value để ta nhập DL cần truyền  */
  );

}

export default App;
