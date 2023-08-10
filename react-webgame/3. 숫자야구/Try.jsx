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
Try.displayName = 'Try'; // memo를 사용할 경우 displayName이 변경되어 개발자 도구에서 확인이 어려워짐

export default Try;
