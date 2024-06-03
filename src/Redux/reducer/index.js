import { combineReducers } from "redux";
import crudReducer from "./reducer";

const rootreducer = combineReducers({
    crud : crudReducer
})

export default rootreducer;