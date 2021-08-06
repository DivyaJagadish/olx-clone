import React, { useContext } from "react";
import Item from "./Item ";
import ProductContext from "../Contexts/ProductContext";
export default function Itemlist() {
	const Items = useContext(ProductContext);
	console.log(Items);
	const List = Items.map((product, index) => (
		<Item
			key={index}
			img={product.image}
			title={product.title}
			description={product.description}
			Price={product.price}
			Category={product.Category}
		/>
	));

	return <>{List}</>;
}
