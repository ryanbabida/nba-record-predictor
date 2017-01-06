import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TestBarChart from './testbar';
import TestSpreadSheet from './testspreadsheet'

class TestData extends Component {
	constructor() {
		super();
		this.state = {
			test_set: [],
			target: [],
			ols_predictions: [],
			gd_predictions: [], 
			data_loaded: false,
			results: [],
		}
	}

	getTestData() {
		$.ajax({
	      url: 'https://nba-record-predictor.herokuapp.com/api/v1.0/sample',
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({test_set: data.test_set,
	        				target: data.target, 
	        				ols_predictions: data.ols_predictions,
	        				gd_predictions: data.gd_predictions,
	        				results: data.results,
	        				data_loaded: true,
	        			}, function() {
	        });
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.log(err);
	      }
	    })
	}

	componentDidMount() {
		this.getTestData();

	}

	render() {
		if (this.state.data_loaded) {
			return (
				<div>
					<center><TestSpreadSheet test_set={this.state.test_set} row_num={31} col_num={26}/></center>
					<center><TestSpreadSheet test_set={this.state.results} row_num={31} col_num={7}/></center>
					<TestBarChart target={this.state.target} ols_predictions={this.state.ols_predictions} gd_predictions={this.state.gd_predictions} />
				</div>
			)
		}
		else {
			return (
				<TestBarChart target={this.state.target} ols_predictions={this.state.ols_predictions} gd_predictions={this.state.gd_predictions} />
			)
		}
	}
}

export default TestData;