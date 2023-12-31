const React = require('react');
const { useState, useRef } = React;

const Gugudan = () => {
	const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
	const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
	const [value, setValue] = useState('');
	const [result, setResult] = useState('');
	const [preVal, setPreVal] = useState('');
	const inputEl = useRef(null);

	const onChangeVal = (e) => {
		setValue(e.target.value);
	};
	const onSubmitForm = (e) => {
		e.preventDefault();
		if (parseInt(value) === first * second) {
			setResult('정답');
			setFirst(Math.ceil(Math.random() * 9));
			setSecond(Math.ceil(Math.random() * 9));
			setPreVal(value);
			setValue('');
			inputEl.current.focus();
		} else {
			setResult('땡!');
			setValue('');
			setPreVal('');
			inputEl.current.focus();
		}
	};

	return (
		<>
			<div>
				{first} 곱하기 {second}는?
			</div>
			<form onSubmit={onSubmitForm}>
				<input ref={inputEl} type='number' value={value} onChange={onChangeVal} />
				<button>입력</button>
			</form>
			<div>결과: {result + preVal}</div>
		</>
	);
};

module.exports = Gugudan;
