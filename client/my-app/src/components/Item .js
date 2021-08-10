import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { lightBlue } from "@material-ui/core/colors";
import Itemdescription from "./Itemdescription";

const useStyles = makeStyles({
	root: {
		height: 400,
		width: 350,
		paddingBottom: "1rem",
	},
	media: {
		height: 200,
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

export default function Item(props) {
	const classes = useStyles();
	console.log(props);

	const id = props.index;

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					component="img"
					image={props.img}
					title={props.title}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{props.title}
						<div>$ {props.Price}</div>
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button variant="contained" size="small" color="primary">
					Add to Cart
				</Button>
				<Link to={`/details/${id}`}>
					<Button variant="contained" size="small" color="primary">
						Learn More
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
}
