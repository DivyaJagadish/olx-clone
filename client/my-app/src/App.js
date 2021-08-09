import React from "react";
import "./App.css";

import useApplicationData from "./helpers/useApplicationdata";
import "./components/styles/itemlist.css";
import ItemDescriptionPage from "./pages/Itemdescriptionpage";
import ProductContext from "./Contexts/ProductContext";
// import { Provider } from "react-redux";
// import store from "./REDUX/store";

function App() {
	const { state } = useApplicationData();
	return (
		<>
			<ProductContext.Provider value={state.products}>
				<ItemDescriptionPage />
			</ProductContext.Provider>
		</>
	);
}

export default App;
