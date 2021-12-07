import logo from './logo.svg';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux'
import { decrease, increase } from './store/Reducers/counterReducer';
import MenuNavbar from './components/Navbar/Navbar'


function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch()


  return (
    <span className="">
    <MenuNavbar />
      {/* <h1>{count}</h1>
      <button className={"btn btn-primary m-2"} onClick={() => dispatch(increase())}>++</button>
      <button className={"btn btn-primary"} onClick={() => dispatch(decrease())} >--</button> */}
    </span>
  );
}

export default App;
