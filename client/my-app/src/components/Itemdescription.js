import React, { useContext } from "react";
import ProductContext from "../Contexts/ProductContext";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { lightBlue } from "@material-ui/core/colors";

const useStyles = makeStyles({
	root: {
		height: 400,
		width: 350,
	},
});

export default function Itemdescription(props) {
	const Items = useContext(ProductContext);
	const classes = useStyles();
	const data = Items[props.index];
	console.log(data);
	return (
		<>
			{" "}
			{{
				if(data) {
					data.title;
					data.img;
				},
			}}
			Hello
		</>
	);
}
