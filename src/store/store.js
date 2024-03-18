import { authReducer } from "./reducer/auth.reducer";
import { combineReducers, createStore, applyMiddleware} from "redux";
import {thunk} from "redux-thunk";

//It is like wrapping <App /> with <context>
 const reducer = combineReducers({
    auth: authReducer
 })

export const store = createStore(reducer, {}, applyMiddleware(thunk));