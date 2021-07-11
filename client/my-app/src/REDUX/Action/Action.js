import { ActionTypes } from "../constants/action-types";

export const getItem = (Items) => {
	return {
		type: ActionTypes.Get_Items,
		payload: allitems,
	};
};
export const selectitem = (Item) => {
	return {
		type: ActionTypes.Select_Item,
		payload: item,
	};
};
export const deleteitem = () => {
	return {
		type: ActionTypes.Remove_Item,
	};
};
