import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
	const [state, setState] = useState({
		products: [],
		cart: [],
	});
	useEffect(() => {
		const Products = axios.get("https://fakestoreapi.com/products");
		Products.then((result) => {
			console.log(result);
			setState((prev) => ({
				...prev,
				products: result.data,
			}));
		});
	}, []);

	return {
		state,
	};
}
