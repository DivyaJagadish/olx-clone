import React from "react";
import "./App.css";
import Nav from "./Nav";
import Itemlist from "./components/Itemlist";
import useApplicationData from "./helpers/useApplicationdata";
// import { Provider } from "react-redux";
// import store from "./REDUX/store";

function App() {
	const { state } = useApplicationData();
	return (
		<>
			<Nav />
			<Itemlist />
		</>
	);
}

export default App;
