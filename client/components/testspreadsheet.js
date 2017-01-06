import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SpreadsheetComponent from 'react-spreadsheet-component';

class TestSpreadSheet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			initialData: {
				rows: this.props.test_set
			},
			config: {
			    rows: this.props.row_num,
			    columns: this.props.col_num,
			    hasHeadColumn: true,
			    isHeadColumnString: true,
			    hasHeadRow: true,
			    isHeadRowString: true,
			    canAddRow: false,
			    canAddColumn: false,
			    emptyValueSymbol: '-',
			    hasLetterNumberHeads: false
			}
		}
	}

	render() {
		return (
			<div>
				<h3>Test Data from the 2016-2017 seaon</h3>
				<p>Actual and predicted values on the right.</p>
				<SpreadsheetComponent initialData={this.state.initialData} config={this.state.config} spreadsheetId="1" />
			</div>
		)
	}
}

export default TestSpreadSheet;