import { createStore, compose } from "redux";
//import the root reducer
import rootReducer from "./reducers/index";

import comments from "./data/comments";
import posts from "./data/posts";

//create object for the default data
const defaultState = {
  posts,
  comments
};

const enhancers = compose(
  // window.devToolsExtension ? window.devToolsExtension() : f => f
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, defaultState, enhancers);

if (module.hot) {
  module.hot.accept("./reducers/", () => {
    const nextRootReducer = require("./reducers/index").default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
