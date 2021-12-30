import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducers";
import "./index.css";
import CounterExample from "./App";

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <CounterExample />
  </Provider>,
  document.getElementById("root")
);
