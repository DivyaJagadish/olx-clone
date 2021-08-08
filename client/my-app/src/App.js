import React from "react";
import "./App.css";
import Nav from "./Nav";
import Itemlist from "./components/Itemlist";
import useApplicationData from "./helpers/useApplicationdata";
import "./components/styles/itemlist.css";
import Itemdescription from "./components/Itemdescription";
import ProductContext from "./Contexts/ProductContext";
// import { Provider } from "react-redux";
// import store from "./REDUX/store";

function App() {
	const { state } = useApplicationData();
	return (
		<>
			<ProductContext.Provider value={state.products}>
				<Nav />
				<Itemdescription index={0} />
			</ProductContext.Provider>
		</>
	);
}

export default App;
