import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import useApplicationData from "./helpers/useApplicationdata";
import "./components/styles/itemlist.css";
import ItemDescriptionPage from "./pages/Itemdescriptionpage";
import ProductContext from "./Contexts/ProductContext";
import Homepage from "./pages/HomePage";
// import { Provider } from "react-redux";
// import store from "./REDUX/store";

function App() {
	const { state } = useApplicationData();
	return (
		<>
			<ProductContext.Provider value={state.products}>
				<Router>
					<Switch>
						<Route exact path="/">
							<Homepage />
						</Route>
						<Route exact path="/details">
							<ItemDescriptionPage />
						</Route>
					</Switch>
				</Router>
			</ProductContext.Provider>
		</>
	);
}

export default App;
