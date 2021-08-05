import React, { useEffect } from "react";
import useState from " react";

export default function useApplicationData() {
	const [state, setState] = useState({
		products: [],
	});
	useEffect(() => {
		const Products = axios.get("/api/digitalpet");

		Products.then((result) => {
			console.log(result);
			setState((prev) => ({
				...prev,
				products: result,
			}));
		});
	}, []);
	return {
		state,
	};
}
