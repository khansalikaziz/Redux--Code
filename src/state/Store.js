import { applyMiddleware } from "@reduxjs/toolkit";
import { createStore } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk"



export const store=createStore(reducers,{},applyMiddleware(thunk))