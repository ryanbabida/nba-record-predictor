import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class PredictionForm extends Component {
	constructor() {
		super();
	}

	render() {
		return (
				<div>
				<center>
				<h2>Enter your values to get your prediction.</h2>
				<form>
				  <label>GP</label> 
				  <input type="number" min="10" max="82" step="1" defaultValue="40" name="GP"/>
				  <label>MIN</label> 
				  <input type="number" min="46.0" max="49.0" step="0.5" defaultValue="47.5" name="MIN"/>
				  <label>PTS</label>
				  <input type="number" min="90.0" max="110.0" step="0.5" defaultValue="100.0" name="PTS"/>
				  <label>FGM</label>
				  <input type="number" min="35.0" max="45.0" step="0.5" defaultValue="40.0" name="FGM"/>
				  <label>FGA</label>
				  <input type="number" min="80.0" max="95.0" step="0..5" defaultValue="90.0" name="FGA"/>
				  <br/>
				  <label>FG%</label>
				  <input type="number" min="40.0" max="50.0" step="0.1" defaultValue="45.0" name="FG%"/>
				  <label>3PM</label>
				  <input type="number" min="5.0" max="20.0" step="0.5" defaultValue="10.0" name="3PM"/>
				  <label>3PA</label>
				  <input type="number" min="15.0" max="35.0" step="0.5" defaultValue="25.0" name="3PA"/>
				  <label>3P%</label>
				  <input type="number" min="25.0" max="45.0" step="0.5" defaultValue="30.0" name="3P%"/>
				  <label>FTM</label>
				  <input type="number" min="15.0" max="30.0" step="0.5" defaultValue="20.0" name="FTM"/>
				  <br/>
				  <label>FTA</label>
				  <input type="number" min="15.0" max="40.0" step="0.5" defaultValue="25.0" name="FTA"/>
				  <label>FT%</label>
				  <input type="number" min="70.0" max="90.0" step="0.5" defaultValue="80.0" name="FT%"/>
				  <label>OREB</label>
				  <input type="number" min="10.0" max="20.0" step="0.5" defaultValue="12.0" name="OREB"/>
				  <label>DREB</label>
				  <input type="number" min="30.0" max="45.0" step="0.5" defaultValue="35.0" name="DREB"/>
				  <label>REB</label>
				  <input type="number" min="40.0" max="55.0" step="0.5" defaultValue="50.0" name="REB"/>
				  <br/>
				  <label>AST</label>
				  <input type="number" min="15.0" max="25.0" step="0.5" defaultValue="20.0" name="AST"/>
				  <label>TOV</label>
				  <input type="number" min="10.0" max="20.0" step="0.5" defaultValue="15.0" name="TOV"/>
				  <label>STL</label>
				  <input type="number" min="5.0" max="15.0" step="0.5" defaultValue="10.0" name="STL"/>
				  <label>BLK</label>
				  <input type="number" min="3.0" max="10.0" step="0.5" defaultValue="7.0" name="BLK"/>
				  <label>BLKA</label>
				  <input type="number" min="3.0" max="10.0" step="0.5" defaultValue="7.0" name="BLKA"/>
				  <br/>
				  <label>PF</label>
				  <input type="number" min="15.0" max="25.0" step="0.5" defaultValue="20.0" name="PF"/>
				  <label>PFD</label>
				  <input type="number" min="15.0" max="25.0" step="0.5" defaultValue="20.0" name="PFD"/>
				  <label>+/-</label>
				  <input type="number" min="-10.0" max="10.0" step="1" defaultValue="5.0" name="+/-"/>
				  <br/>
	      		  <button type="button">Predict!</button>
	      		</form>
	      		</center>
	      		</div>
			)
	}
}

export default PredictionForm;