import CombinedReducer from "./reducers";
import {createStore} from "redux";

const store=createStore(CombinedReducer);

export default store