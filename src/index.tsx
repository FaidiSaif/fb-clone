import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { userReducer, initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

ReactDOM.render(
  <StateProvider reducer={userReducer} initialState={initialState}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
