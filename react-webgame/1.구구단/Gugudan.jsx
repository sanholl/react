const React = require('react');

const Gugudan = () => {
	const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
	const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
	const [value, setValue] = React.useState('');
	const [result, setResult] = React.useState('');
	const [preVal, setPreVal] = React.useState('');
	const inputEl = React.useRef(null);

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
		<React.Fragment>
			<div>
				{first} 곱하기 {second}는?
			</div>
			<form onSubmit={onSubmitForm}>
				<input ref={inputEl} type='number' value={value} onChange={onChangeVal} />
				<button>입력</button>
			</form>
			<div>결과: {result + preVal}</div>
		</React.Fragment>
	);
};

module.exports = Gugudan;
