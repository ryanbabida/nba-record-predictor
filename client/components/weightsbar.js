import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HighCharts from 'highcharts/highstock';

class WeightsBarChart extends Component {

	constructor(props) {
		super(props);
		this.chart = undefined;
	}

	componentDidMount() {
		this.chart = $(this.refs.chart).highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Weight Values for OLS and GD'
            },
            xAxis: {
                categories: ["MIN","PTS","FGM","FGA","FG%","3PM","3PA","3P%","FTM","FTA","FT%","OREB","DREB","REB","AST","TOV","STL","BLK","BLKA","PF","PFD","+/-"]
            },
            credits: {
                enabled: false
            },
            series: [
	            {
	                name: 'OLS Weights',
	                data: this.props.ols_weights
	            }, 
	            {
	                name: 'Gradient Descent Weights',
	                data: this.props.gd_weights
	            }
	        ]
		});
	}

	componentWillReceiveProps(props) {
		this.chart.highcharts().series[0].setData(props.ols_weights);
		this.chart.highcharts().series[1].setData(props.gd_weights);
	}
	render() {

		return (
			<div ref='chart'/>
		)

	}
}

export default WeightsBarChart;