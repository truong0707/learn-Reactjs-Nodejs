import './App.css';
import { signInWithGoogle } from './firebase/FireBase';
import { signOutUser } from './firebase/FireBase';


function App() {
  return (
    <div className="App">

      <button onClick={signInWithGoogle}>Sign In With Google</button>
      <h4>{localStorage.getItem("name")}</h4>
      <button onClick={signOutUser}>Log out</button>
    </div>
  );
}

export default App;
