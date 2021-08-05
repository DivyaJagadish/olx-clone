import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
	const [state, setState] = useState({
		products: [],
	});
	useEffect(() => {
		const Products = axios.get("https://fakestoreapi.com/products");
		console.log("ddddd");
		Products.then((result) => {
			console.log(result.data);
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
