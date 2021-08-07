import React, { useContext } from "react";
import Item from "./Item ";
import ProductContext from "../Contexts/ProductContext";
import "./styles/itemlist.css";
import { Grid } from "@material-ui/core";
export default function Itemlist() {
	const Items = useContext(ProductContext);
	console.log(Items);
	const myStyle = {
		display: "Grid",
		"grid-template-columns": "auto auto auto",
		padding: "1rem",
	};

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

	return <p style={myStyle}>{List}</p>;
}
