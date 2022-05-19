import { useState, useEffect } from "react"
import './App.css';

function App() {

  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);

  const handleShowMoreTtems = () => {
    setVisible(preValue => preValue +3);
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => (
      res.json()
    ))
    .then(data => setItems(data));
    }, []);


  return (
    <div className="App">
      <div className="container">
        {items.slice(0,visible).map(item => (
          <div className="card">
            <div className="id">
              <span>{item.id}</span>
            </div>
            <p>{item.body}</p>
          </div>
        ))}
      </div>

      <button onClick={handleShowMoreTtems}>Load more</button>
    </div>
  );
}

export default App;
