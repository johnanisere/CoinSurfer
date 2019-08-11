import { createStore, applyMiddleware, compose } from "redux";
import devTools from "remote-redux-devtools";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { persistStore } from "redux-persist";
import reducer from "../reducers";

export default function configureStore(onCompletion: any): any {
  const enhancer = compose(
    applyMiddleware(thunk, promise),
    devTools({
      name: "nativestarterkit",
      realtime: true
    })
  );

  const store = createStore(reducer, enhancer);
  persistStore(store, onCompletion);

  return store;
}
