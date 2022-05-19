import './App.css';
import Content from './Content';
/////////////////////////

import { useState } from 'react';


// Bài toán tạo Theme : Dark / Light

function App() {
  const [ theme, setTheme ] = useState('dark')
  

  const toggleTheme = () => {
    setTheme(theme === 'dart' ? 'light' : 'dart' ) // nếu theme = dart thì sẽ đổi thành light, nếu light -> dart
  }

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Content theme={theme}/>
    </div>
  );
}

export default App;
