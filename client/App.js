import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Weights from './components/weights';
import TestData from './components/testdata';
import Prediction from './components/predict';

class App extends Component {
	constructor() {
 		super();
 		this.state = {
 			showWeightComp: false,
			showTestComp: false,
			showPredictComp: false,
 		}
 		this.onWeightButtonClick = this.onWeightButtonClick.bind(this);
 		this.onTestButtonClick = this.onTestButtonClick.bind(this);
 		this.onPredictButtonClick = this.onPredictButtonClick.bind(this);
 	}

	onWeightButtonClick() {
		if (this.state.showWeightComp) {
	    	this.setState({
	 			showWeightComp: false,
				showTestComp: false,
				showPredictComp: false,
	    	});
		}
		else {
	    	this.setState({
	 			showWeightComp: true,
				showTestComp: false,
				showPredictComp: false,
	    	});
		}

  	}

  	onTestButtonClick() {
		if (this.state.showTestComp) {
	    	this.setState({
	 			showWeightComp: false,
				showTestComp: false,
				showPredictComp: false,
	    	});
		}
		else {
	    	this.setState({
	 			showWeightComp: false,
				showTestComp: true,
				showPredictComp: false,
	    	});
		}
  	}

  	onPredictButtonClick() {
		if (this.state.showPredictComp) {
	    	this.setState({
	 			showWeightComp: false,
				showTestComp: false,
				showPredictComp: false,
	    	});
		}
		else {
	    	this.setState({
	 			showWeightComp: false,
				showTestComp: false,
				showPredictComp: true,
	    	});
		}
  	}

	render() {
		return (
			<div className="App">
				<center>
					<button class = "btn btn-default" onClick={this.onWeightButtonClick} type="submit">Calculate Weights</button>
					<button class = "btn btn-default" onClick={this.onTestButtonClick} type="submit">Run Test Data</button>
					<button class = "btn btn-default" onClick={this.onPredictButtonClick} type="submit">Predict your Own</button>
				</center>
				{this.state.showWeightComp ?
					<Weights /> :
					null
				}
				{this.state.showTestComp ?
					<TestData /> :
					null
				}
				{this.state.showPredictComp ?
					<Prediction /> :
					null
				}
			</div>
		)
	};
}

export default App;
