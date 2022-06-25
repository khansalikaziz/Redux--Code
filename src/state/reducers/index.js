import { combineReducers } from "redux";
import amountReducers from "./amountReducers";

const reducers=combineReducers({
    amount:amountReducers
})
export default reducers