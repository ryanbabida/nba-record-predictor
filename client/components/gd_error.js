import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HighCharts from 'highcharts/highstock';

class GradDescError extends Component {
	constructor(props) {
		super(props);
		this.chart = undefined;
	}

	componentDidMount() {
		this.chart = $(this.refs.chart).highcharts({
	        title: {
	            text: 'Gradient Descent Error at Each Step',
	            x: -20 //center
	        },
	        xAxis: {
	            categories: []
	        },
	        yAxis: {
	            title: {
	                text: 'Error %'
	            },
	            plotLines: [{
	                value: 0,
	                width: 0.1,
	                color: '#808080'
	            }]
	        },
	        tooltip: {
	            valueSuffix: ''
	        },
	        legend: {
	            layout: 'vertical',
	            align: 'right',
	            verticalAlign: 'middle',
	            borderWidth: 0
	        },
	        series: [{
	            name: '1 Iteration',
	            data: this.props.gd_err
	        }]
		});

	}

	componentWillReceiveProps(props) {
		this.chart.highcharts().series[0].setData(props.gd_err);
	}

	render() {
		return (
			<div ref='chart'/>
			)
	}
}

export default GradDescError;