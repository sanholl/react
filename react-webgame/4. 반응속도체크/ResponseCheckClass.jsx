import React, { Component } from 'react';
import styled from 'styled-components';

const ColorDiv1 = styled.div`
	width: 200px;
	height: 200px;
	background-color: #ff6b6b;
`;

const ColorDiv2 = styled.div`
	width: 200px;
	height: 200px;
	background-color: #ab68ff;
`;

class ResponseCheckClass extends Component {
	state = {
		random: Math.floor(Math.random() * 9),
	};
	render() {
		return (
			<>
				<div>ResponseCheckClass</div>
				{this.state.random == 1 ? <ColorDiv2 /> : <ColorDiv1 />}
			</>
		);
	}
}

export default ResponseCheckClass;
