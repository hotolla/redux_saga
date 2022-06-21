import { useSelector } from "react-redux/es/exports";
import store from "./redux/store";

const App = () => {
  const store = useSelector(store => store);
  console.log(store);
  
  return (<h1>Hello word!!!</h1>)
}

export default App;
