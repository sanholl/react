import React from 'react';

const Try = ({ tryProps, resultProps }) => {
	return (
		<li>
			<div>
				{tryProps} : {resultProps}
			</div>
		</li>
	);
};

export default Try;
