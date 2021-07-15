import { combineReducers } from "redux";

import Itemreducers from "./Itemreducers.js";

const rootReducer = combineReducers({
	// Define a top-level state field named `todos`, handled by `todosReducer`
	Items: Itemreducers,
});

export default rootReducer;
