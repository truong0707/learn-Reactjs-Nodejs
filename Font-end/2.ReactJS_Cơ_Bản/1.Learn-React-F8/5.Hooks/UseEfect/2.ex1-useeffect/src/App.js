import './App.css';
import { useState } from 'react'
import Ex1UseEffect from './Component/Ex1UseEffect';
import Ex1UseEffect2 from './Component/Ex1UseEffect2';
import UseEffectWithDependencies from './Component/Call-API-Update_Dom/UseEffectWithDependencies';
import UseEffectWithDependencies2 from './Component/Call-API-Update_Dom/UseEffectWithDependencies2';



import ExScroll from './Component/Listen-Dom-Event/ExScroll';
import ExScroll2 from './Component/Listen-Dom-Event/ExScroll2';

import Resize from './Component/Listen-Dom-Event/Resize';

function App() {
  const [show, setShow] = useState(false);


  return (
    <div className="App">
      <div className="App">
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show &&
         /*   1. */
          // <Ex1UseEffect />
          // <Ex1UseEffect2 />
          // <UseEffectWithDependencies/>
          // <UseEffectWithDependencies2/>


          <ExScroll/>
          // <ExScroll2/>
          // <Resize/>

        }
      </div>
    </div>
  );
}

export default App;
