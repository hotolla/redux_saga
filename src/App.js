import { useSelector, useDispatch } from "react-redux";
import { increaseCount, decreaseCount } from "./redux/redux/actions/actionCreator";

const App = () => {
  const count = useSelector(store => store?.counter?.count);
  console.log(count);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCount());
  };

  const handleDecrease = () => {
    dispatch(decreaseCount());
  };
  
  return (
    <div>
      <h1>{count}</h1>
      <button onCick={handleIncrease}>+1</button>
      <button onCick={handleDecrease}>-1</button>
    </div>
  )
}

export default App;
