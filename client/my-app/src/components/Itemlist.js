import React, { useContext } from "react";
import Item from "./Item ";
import ProductContext from "../Contexts/ProductContext";
import "./styles/itemlist.css";
export default function Itemlist() {
	const Items = useContext(ProductContext);
	const myStyle = {
		display: "Grid",
		"grid-template-columns": "auto auto auto auto",
		padding: "1rem",
		"grid-row-gap": "0.5cm",
	};

	const List = Items.map((product, index) => (
		<Item
			key={index}
			index={index}
			img={product.image}
			title={product.title}
			description={product.description}
			Price={product.price}
			Category={product.Category}
		/>
	));

	return <p style={myStyle}>{List}</p>;
}
