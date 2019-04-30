import React, { Component } from "react";
import "../css/App.css";
import Product from "./Product.js";


class ResultsBoard extends Component {
	constructor(props){
		super(props);
		this.indents = [];
		for(let i = 0; i < 20; i++){
			this.indents.push(<Product />);
		}
	}
	render() {
		return (
			<div id="resultsDiv">
				{this.indents}
			</div>
		);
	}
}

export default ResultsBoard;
