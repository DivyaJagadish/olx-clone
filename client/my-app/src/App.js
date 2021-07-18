import React from "react";
import "./App.css";
import Nav from "./Nav";
import Itemlist from "./components/Itemlist";
import Provider from "react-redux";
import store from "./REDUX/store";

function App() {
	return (
		<>
			<Provider store={store}>
				<Nav />
				<Itemlist />
			</Provider>
		</>
	);
}

export default App;
