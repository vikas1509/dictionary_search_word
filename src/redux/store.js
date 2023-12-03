import {  createStore } from "redux";
import wordReducer from "./reducers/wordReducer.js";

const store = createStore(wordReducer)
export default store