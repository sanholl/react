import React, { useState, useRef, useCallback } from 'react';

import Try from './Try.jsx';

const getNumbers = () => {
	const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const array = [];

	for (let i = 0; i < 4; i++) {
		const chosen = number.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
		array.push(chosen);
	}
	return array;
};

const NumberBaseball = () => {
	const [value, setValue] = useState('');
	const [result, setResult] = useState('');
	const [answer, setAnswer] = useState(getNumbers); // lazy init
	const [tries, setTries] = useState([]);
	const refInput = useRef(null);

	const onSubmitForm = useCallback(
		(e) => {
			e.preventDefault();
			if (value === answer.join('')) {
				setTries((t) => [
					...t,
					{
						try: value,
						result: '홈런!',
					},
				]);
				setResult('홈런!');
				alert('게임을 다시 실행합니다.');
				setValue('');
				setAnswer(getNumbers());
				setTries([]);
				refInput.current.focus();
			} else {
				const answerArray = value.split('').map((v) => parseInt(v));
				let strike = 0;
				let ball = 0;
				if (tries.length >= 9) {
					setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`); // state set은 비동기
					alert('게임을 다시 시작합니다.');
					setValue('');
					setAnswer(getNumbers());
					setTries([]);
					refInput.current.focus();
				} else {
					console.log('답은', answer.join(''));
					for (let i = 0; i < 4; i++) {
						if (answerArray[i] === answer[i]) {
							console.log('strike', answerArray[i], answer[i]);
							strike += 1;
						} else if (answer.includes(answerArray[i])) {
							console.log('ball', answerArray[i], answer.indexOf(answerArray[i]));
							ball += 1;
						}
					}
					// 이전 값을 이용해서 새로운 값을 만들 경우 함수형 state를 사용하자
					setTries((t) => [
						...t,
						{
							try: value,
							result: `${strike} 스트라이크, ${ball} 볼입니다.`,
						},
					]);
					setValue('');
					refInput.current.focus();
				}
			}
		},
		[value, answer]
	);

	const onChangeInput = useCallback((e) => setValue(e.target.value), []);

	return (
		<>
			<div>결과 : {result}</div>
			<form onSubmit={onSubmitForm}>
				<input maxLength={4} id='ball' ref={refInput} value={value} onChange={onChangeInput} />
				<button>입력</button>
			</form>
			<div>시도 : {tries.length}</div>
			<ul>
				{tries.map((a, i) => (
					<Try key={a} tryProps={a.try} resultProps={a.result} />
				))}
			</ul>
		</>
	);
};

export default NumberBaseball;
