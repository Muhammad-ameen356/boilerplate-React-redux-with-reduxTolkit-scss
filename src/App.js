import logo from './logo.svg';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux'
import { decrease, increase } from './Src/store/Reducers/counterReducer'


function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch()


  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())} >-</button>
    </div>
  );
}

export default App;
