import { combineReducers } from "redux";

import itemReducer from "./Itemreducers.js";

const rootReducer = combineReducers({
	// Define a top-level state field named `todos`, handled by `todosReducer`
	Items: itemReducer,
});

export default rootReducer;
