import { Actiontypes } from "../constants/action-types";

export const itemReducer = (state, { type, payload }) => {
	switch (type) {
		case Actiontypes.Get_Items:
			return state;
			break;
		case Actiontypes.Select_Item:
			return state;
			break;
		default:
			return state;
	}
};
