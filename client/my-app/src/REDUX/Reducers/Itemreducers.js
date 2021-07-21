import { ActionTypes } from "../constants/action-types";

export const itemReducer = (state, { type, payload }) => {
	switch (type) {
		case ActionTypes.Get_Items:
			return state;
		case ActionTypes.Select_Item:
			return state;
		default:
			return state;
	}
};
