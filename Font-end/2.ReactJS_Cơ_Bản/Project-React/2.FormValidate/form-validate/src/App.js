
import { FormInput } from './components/FormInput';
import './App.css';
import { useState, useRef } from 'react';

function App() {

  // const [userName, setUserName] = useState("") 



  console.log("re-render")

  const handleSubmit = (e) => { 
    e.preventDefault();

    
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <FormInput placeholder= "Username" />
        <FormInput placeholder= "Email"/>
        <FormInput placeholder= "Full Name"/>
        <FormInput placeholder= "Sth else"/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
