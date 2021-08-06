import React, { useContext } from "react";
import Item from "./Item ";
import ProductContext from "../Contexts/ProductContext";
export default function Itemlist() {
	const Items = useContext(ProductContext);
	const List = Items.map((product, index) => (
		<Item
			key={index}
			img={product.image}
			title={product.name}
			description={product.description}
			Price={product.Price}
			Category={product.Category}
		/>
	));

	return <>{List}</>;
}
