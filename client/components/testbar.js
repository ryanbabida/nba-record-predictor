import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HighCharts from 'highcharts/highstock';

class TestBarChart extends Component {
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
                text: 'Comparison between Actual and Predicted Win Percentages'
            },
            xAxis: {
                categories: []
            },
            credits: {
                enabled: false
            },
            series: [
            	{
	                name: 'Actual Values',
	                data: this.props.target,
	            }, 
	            {
	                name: 'OLS Predictions',
	                data: this.props.ols_predictions
	            }, 
	            {
	                name: 'Gradient Descent Predictions',
	                data: this.props.gd_predictions
	            }
	        ]
		});
	}

	componentWillReceiveProps(props) {
		this.chart.highcharts().series[0].setData(props.target);
		this.chart.highcharts().series[1].setData(props.ols_predictions);
		this.chart.highcharts().series[2].setData(props.gd_predictions);
	}
	render() {

		return (
			<div ref='chart'/>
		)
	}
}

export default TestBarChart;