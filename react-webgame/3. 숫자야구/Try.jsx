import React, { memo } from 'react';

const Try = memo(({ tryProps, resultProps }) => {
	return (
		<li>
			<div>
				{tryProps} : {resultProps}
			</div>
		</li>
	);
});

export default Try;
