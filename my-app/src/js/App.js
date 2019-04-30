import React, { Component } from "react";
import Header from "./Header.js";
import Filters from "./Filters.js";
//import logo from "../img/logo.svg";
import "../css/App.css";
import ResultsBoard from "./ResultsBoard";

class App extends Component {
	render() {
		return (
			<div id="mainContainer">
				<Header />
				<section><Filters /><ResultsBoard /></section>
				<footer>Footer</footer>
			</div>
		);
	}
}

export default App;
