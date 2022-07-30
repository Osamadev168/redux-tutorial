import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions';
function App() {
  const counter = useSelector(state => state.counter)
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Hello Jigger!</h1>
      {auth ? <h1>Hello again</h1> : null}

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <h1>Counter :  {counter}</h1>

    </div>
  );
}

export default App;
