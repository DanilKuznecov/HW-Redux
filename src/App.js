import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { countInc } from './store/userAction';
import { countDic } from './store/userAction';
import { countRes } from './store/userAction';


function App() {

  const dispatch = useDispatch()
  const count = useSelector(state => state)

  const countChangeInc = () => {
    dispatch(countInc())
  }

  const countChangeDic = () => {
    dispatch(countDic())
  }
  
  const countChangeRes = () => {
    dispatch(countRes())
  }

  return (
    <div className="App">
        <p>{count}</p>
        <button onClick={countChangeInc}>Inc</button>
        <button onClick={countChangeDic}>Dec</button>
        <button onClick={countChangeRes}>Res</button>
    </div>
  );
}

export default App;
