import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PredictionForm from './prediction_form';
import PredictionChart from './prediction_chart';


class Prediction extends Component {
	constructor() {
		super();
		this.state = {
			prediction_made: false,
			games_played: 0,
			url: "",
			ols_prediction: -1,
			gd_prediction: -1,
			ols_win: -1, 
			ols_loss: -1,
			gd_win: -1, 
			gd_loss: -1,
		}
	}

	handleSubmit(e) {
		this.setState({
			games_played: this.refs.GP.value,
			url: "http://127.0.0.1:5000/api/v1.0/predict?&MIN=" + this.refs.MIN.value + 
			"&PTS=" + this.refs.PTS.value + "&FGM=" + this.refs.FGM.value + "&FGA=" +
			this.refs.FGA.value + "&FG=" + this.refs.FGPER.value + "&3PM=" + this.refs.TPM.value + 
			"&3PA=" + this.refs.TPA.value + "&3P=" + this.refs.TTPER.value + "&FTM=" + 
			this.refs.FTM.value + "&FTA=" + this.refs.FTA.value + "&FT=" + this.refs.FT.value + 
			"&OREB=" + this.refs.OREB.value + "&DREB=" + this.refs.DREB.value + "&REB=" + 
			this.refs.REB.value + "&AST=" + this.refs.AST.value + "&TOV=" + this.refs.TOV.value + 
			"&STL=" + this.refs.STL.value + "&BLK=" + this.refs.BLK.value + "&BLKA=" + 
			this.refs.BLKA.value + "&PF=" + this.refs.PF.value + "&PFD=" + this.refs.PFD.value + 
			"&MAR=" + this.refs.MAR.value
		}, function() {
			$.ajax({
		      url: this.state.url,
		      dataType: 'json',
		      cache: false,
		      success: function(data) {
		        this.setState({ prediction_made: true,
		        				ols_prediction: data.ols_prediction,
								gd_prediction: data.gd_prediction,
								ols_win: Math.round(this.state.games_played * data.ols_prediction),
								ols_loss: this.state.games_played - Math.round(this.state.games_played * data.ols_prediction),	
								gd_win: Math.round(this.state.games_played * data.gd_prediction),
								gd_loss: this.state.games_played - Math.round(this.state.games_played * data.gd_prediction),	
		        			}, function() {
		        });
		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.log(err);
		      }
		    })
		});
		e.preventDefault();
	}

	render() {
		if (this.state.prediction_made) {
			return(
				<div class="row">
				<center>
				  <div class="col-md-6">
				    <h3>OLS</h3>
				  	<PredictionChart games_played={this.state.games_played} prediction={this.state.ols_prediction} 
				  		win={this.state.ols_win} loss={this.state.ols_loss}/>
				  </div>
				</center>
				<center>
				  <div class="col-md-6">
				    <h3>Gradient Descent</h3>
				  	<PredictionChart games_played={this.state.games_played} prediction={this.state.gd_prediction} 
				  		win={this.state.gd_win} loss={this.state.gd_loss}/>
				  </div>
				</center>
				</div>
				) 
		}
		else {
			return (
				<div>
					<center>
					<h2>Enter your values to get your prediction.</h2>
					<form onSubmit={this.handleSubmit.bind(this)}>
					  <label>GP</label> 
					  <input type="number" min="10" max="82" step="1" defaultValue="40" ref="GP"/>
					  <label>MIN</label> 
					  <input type="number" min="46.0" max="49.0" step="0.5" defaultValue="47.5" ref="MIN"/>
					  <label>PTS</label>
					  <input type="number" min="90.0" max="110.0" step="0.5" defaultValue="100.0" ref="PTS"/>
					  <label>FGM</label>
					  <input type="number" min="35.0" max="45.0" step="0.5" defaultValue="40.0" ref="FGM"/>
					  <label>FGA</label>
					  <input type="number" min="80.0" max="95.0" step="0.5" defaultValue="90.0" ref="FGA"/>
					  <br/>
					  <label>FG%</label>
					  <input type="number" min="40.0" max="50.0" step="0.1" defaultValue="45.0" ref="FGPER"/>
					  <label>3PM</label>
					  <input type="number" min="5.0" max="20.0" step="0.5" defaultValue="10.0" ref="TPM"/>
					  <label>3PA</label>
					  <input type="number" min="15.0" max="35.0" step="0.5" defaultValue="25.0" ref="TPA"/>
					  <label>3P%</label>
					  <input type="number" min="25.0" max="45.0" step="0.5" defaultValue="30.0" ref="TTPER"/>
					  <label>FTM</label>
					  <input type="number" min="15.0" max="30.0" step="0.5" defaultValue="20.0" ref="FTM"/>
					  <br/>
					  <label>FTA</label>
					  <input type="number" min="15.0" max="40.0" step="0.5" defaultValue="25.0" ref="FTA"/>
					  <label>FT%</label>
					  <input type="number" min="70.0" max="90.0" step="0.5" defaultValue="80.0" ref="FT"/>
					  <label>OREB</label>
					  <input type="number" min="10.0" max="20.0" step="0.5" defaultValue="12.0" ref="OREB"/>
					  <label>DREB</label>
					  <input type="number" min="30.0" max="45.0" step="0.5" defaultValue="35.0" ref="DREB"/>
					  <label>REB</label>
					  <input type="number" min="40.0" max="55.0" step="0.5" defaultValue="50.0" ref="REB"/>
					  <br/>
					  <label>AST</label>
					  <input type="number" min="15.0" max="25.0" step="0.5" defaultValue="20.0" ref="AST"/>
					  <label>TOV</label>
					  <input type="number" min="10.0" max="20.0" step="0.5" defaultValue="15.0" ref="TOV"/>
					  <label>STL</label>
					  <input type="number" min="5.0" max="15.0" step="0.5" defaultValue="10.0" ref="STL"/>
					  <label>BLK</label>
					  <input type="number" min="3.0" max="10.0" step="0.5" defaultValue="7.0" ref="BLK"/>
					  <label>BLKA</label>
					  <input type="number" min="3.0" max="10.0" step="0.5" defaultValue="7.0" ref="BLKA"/>
					  <br/>
					  <label>PF</label>
					  <input type="number" min="15.0" max="25.0" step="0.5" defaultValue="20.0" ref="PF"/>
					  <label>PFD</label>
					  <input type="number" min="15.0" max="25.0" step="0.5" defaultValue="20.0" ref="PFD"/>
					  <label>+/-</label>
					  <input type="number" min="-10.0" max="10.0" step="1" defaultValue="5.0" ref="MAR"/>
					  <br/>
		      		  <input type="submit" value="Submit"/>
		      		</form>
		      		</center>
				</div>
			)
		}
	}
}

export default Prediction;