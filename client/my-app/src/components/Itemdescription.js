import React, { useContext } from "react";
import ProductContext from "../Contexts/ProductContext";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		height: "90%",
		width: "100%",
		margin: "3rem",
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
					<div className={classes.root}>
						<div className={classes.media}>
							<CardMedia
								className={classes.media}
								component="img"
								image={data.image}
								title={data.title}
							/>
							<div>
								<Typography gutterBottom variant="h5" component="h2">
									{data.title}
								</Typography>
								<Typography>{data.description}</Typography>
								<Typography gutterBottom variant="h5" component="h2">
									${data.price}
								</Typography>
								<CardActions>
									<Button variant="contained" size="small" color="primary">
										Add to Cart
									</Button>
									<Button variant="contained" size="small" color="primary">
										Back
									</Button>
								</CardActions>
							</div>
						</div>
					</div>
				</>
			);
		} else return <>{"Loading"}</>;
	}

	console.log(data);
	return <>{description()}</>;
}
