import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reduces";
export const store = createStore(rootReducer, applyMiddleware(thunk));

export type DispatchType = ReturnType<typeof store.dispatch>;
export type RootStoreType = ReturnType<typeof rootReducer>;
