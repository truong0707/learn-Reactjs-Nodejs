import './App.css';
import Ex1Count from './components/Ex1Count';
import Ex2Count from './components/Ex2Count';
import Ex3Count from './components/Ex3Count';
import Ex4ChangeInfo from './components/Ex4ChangeInfo';
import Ex5ChangeInfo from './components/Ex5ChangeInfo';

function App() {

  return (
    <div className="App">
      Ví dụ 1:
      <Ex1Count />

      Ví dụ 2:
      <Ex2Count/>

      Ví dụ 3:
      <Ex3Count/>

      Ví dụ 4:
      <Ex4ChangeInfo/>

      Ví dụ 5:
      <Ex5ChangeInfo/>

    </div>
  );
}

export default App;
