import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import HighCharts from 'highcharts/highstock';

class PredictionChart extends Component {
	constructor(props) {
		super(props);
		this.chart = undefined;
	}

	componentDidMount() {
		this.chart = $(this.refs.chart).highcharts({
			chart: {
			            plotBackgroundColor: null,
			            plotBorderWidth: 0,
			            plotShadow: false
			        },
			        title: {
			            text: 'Predicted W-L<br/>' + this.props.win.toString() + "-" + this.props.loss.toString() ,
			            align: 'center',
			            verticalAlign: 'middle',
			            y: 40
			        },
			        tooltip: {
			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			        },
			        plotOptions: {
			            pie: {
			                dataLabels: {
			                    enabled: true,
			                    distance: -50,
			                    style: {
			                        fontWeight: 'bold',
			                        color: 'white'
			                    }
			                },
			                startAngle: -90,
			                endAngle: 90,
			                center: ['50%', '75%']
			            }
			        },
			        series: [{
			            type: 'pie',
			            name: 'Percentage',
			            innerSize: '50%',
			            data: [
			                ['Wins',   this.props.win],
			                ['Losses', this.props.loss],
			                {
			                    name: '',
			                    y: 0.2,
			                    dataLabels: {
			                        enabled: false
			                    }
			                }
			            ]
			        }]
		});
	}

	render() {

		return (
			<div ref='chart'/>
		)
	}
}

export default PredictionChart;
