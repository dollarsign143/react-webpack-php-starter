"use strict";

import React from 'react';

var AboutPage = React.createClass({
	componentDidMount: function() {
		console.log('AboutPage.js');
	},
	render: function() {
		return (
			<div>
				<h2>About</h2>
			</div>
		);
	}
});

export default AboutPage;