import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import WeightsBarChart from './weightsbar';
import GradDescError from './gd_error';

class Weights extends Component {
	constructor() {
		super();
		this.state = {
 			ols_weights: [],
 			gd_weights: [],
 			gd_err: [],
 		}
	}

	getWeights() {
		$.ajax({
	      url: 'https://nba-record-predictor.herokuapp.com/api/v1.0/weights',
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({names: data.names, 
	        				ols_weights: data.ols_weights,
	        				gd_weights: data.gd_weights,
	        				gd_err: data.gd_err,
	        			}, function() {
	        });
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.log(err);
	      }
	    })
	}


	componentDidMount() {
	    this.getWeights();
	}

	// conponentWillUnmount() {
	// 	this.serverRequest.abort();
	// }

	render() {
		return (
			<div class="row">
				<center>
			 		<div class="col-md-6">
						<WeightsBarChart ols_weights={this.state.ols_weights} gd_weights={this.state.gd_weights} />
					</div>
				</center>
				<center>
					<div class="col-md-6">
						<GradDescError gd_err={this.state.gd_err} />
					</div>
				</center>
			</div>
		)
	};
}

export default Weights;