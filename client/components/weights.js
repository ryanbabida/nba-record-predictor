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
	      url: 'http://127.0.0.1:5000/api/v1.0/weights',
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
	    // var _this = this;
	    // this.serverRequest = 
	    //   axios
	    //     .get("http://127.0.0.1:5000/api/v1.0/weights.json")
	    //     .then(function(result) {    
	    //       _this.setState({names: data.names, 
	    //     				ols_weights: data.ols_weights,
	    //     				gd_weights: data.gd_weights,
	    //     				gd_err: data.gd_err,
	  
	    //       });
	    //     })
	}


	componentDidMount() {
	    this.getWeights();
	}

	// conponentWillUnmount() {
	// 	this.serverRequest.abort();
	// }

	render() {
		return (
			<div>
				<WeightsBarChart ols_weights={this.state.ols_weights} gd_weights={this.state.gd_weights} />
				<GradDescError gd_err={this.state.gd_err} />
			</div>
		)
	};
}

export default Weights;