import React from "react";
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
		padding: "2rem",
		backgroundColor: lightBlue,
	},
	media: {
		height: 200,
		width: 200,
		objectFit: "scale-down",
	},
});

export default function Item(props) {
	const classes = useStyles();

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
						{props.title} $ {props.Price}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{props.description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Add to Cart
				</Button>
				<Button size="small" color="primary">
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
}
