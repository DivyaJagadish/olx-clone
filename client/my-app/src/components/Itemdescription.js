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
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		height: 600,
		width: 600,
	},
	media: {
		display: "flex",
		justifyItems: "center",
		height: 400,
		width: "80%",
		objectFit: "scale-down",
	},
	Typography: {
		fontSize: "15px",
	},
	Button: {
		padding: "2rem",
	},
});

export default function Itemdescription(props) {
	const Items = useContext(ProductContext);
	const classes = useStyles();
	const data = Items[props.index];
	function description() {
		if (data) {
			return (
				<>
					<Typography gutterBottom variant="h3" component="h2">
						{data.title}
					</Typography>
					<Card className={classes.root}>
						<CardActionArea className={classes.media}>
							<Typography gutterBottom variant="h5" component="h2">
								{data.title}
							</Typography>
							<CardMedia
								className={classes.media}
								component="img"
								image={data.image}
								title={data.title}
							/>
						</CardActionArea>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								${data.price}
							</Typography>
							<Typography>{data.description}</Typography>
						</CardContent>

						<CardActions>
							<Button variant="contained" size="small" color="primary">
								Add to Cart
							</Button>
							<Button variant="contained" size="small" color="primary">
								Back
							</Button>
						</CardActions>
					</Card>
				</>
			);
		} else return <>{"Loading"}</>;
	}

	console.log(data);
	return <>{description()}</>;
}
