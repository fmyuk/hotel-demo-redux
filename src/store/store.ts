import { createStore } from "redux";
import { reducer } from "../module/reducers";

const store = createStore(reducer);

export default store;