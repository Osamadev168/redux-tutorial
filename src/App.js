import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux'
function App() {
  const counter = useSelector(state => state.counter)


  return (
    <div className="App">
      <h1>Hello Jigger!</h1>
      <h1>Counter {counter}</h1>
    </div>
  );
}

export default App;
