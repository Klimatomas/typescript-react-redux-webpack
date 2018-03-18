import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./reducers/index";

import { Hello } from "./components/Hello";

let store = createStore(reducer);

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("example")
);

store.subscribe(() => {
  console.log("%c Store state changed: ",'color: blue; font-size:25px', store.getState(), );
})


store.dispatch({type:'asd'});