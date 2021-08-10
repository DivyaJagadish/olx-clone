import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Itemdescription from "../components/Itemdescription";

function ItemDescriptionPage() {
	const { id } = useParams();
	return (
		<>
			<Nav />
			<Itemdescription index={id} />
		</>
	);
}

export default ItemDescriptionPage;
