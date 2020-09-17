import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reduces";
const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootStoreType = ReturnType<typeof rootReducer>;
export type DispatchType = typeof store.dispatch;

export default store;
