import HomeScreen from "./screens/HomeScreen";
import Nav from "./Components/Nav";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="App">
     {/* Shoping Card */} 
     <Nav/>
     <Cart/>
     <HomeScreen/>
    
    </div>
  );
}

export default App;
