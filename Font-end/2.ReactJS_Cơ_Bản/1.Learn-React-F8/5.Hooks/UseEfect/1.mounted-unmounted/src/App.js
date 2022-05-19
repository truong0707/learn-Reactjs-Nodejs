import './App.css';
import Ex1MountedUnMounted from './Components/Ex1MountedUnMounted';
import { useState } from 'react'


// Mounted / Unmounted 

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Ex1MountedUnMounted />}
    </div>
  );
}

export default App;
