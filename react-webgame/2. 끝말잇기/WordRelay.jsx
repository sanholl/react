const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
	const [currentWord, setCurrentWord] = useState('');
	const [lastWord, setLastWord] = useState('');
	const inputRef = useRef(null);

	const onChangeVal = (e) => {
		setCurrentWord(e.target.value);
	};
	const onSubmitForm = (e) => {
		e.preventDefault();

		if (lastWord[lastWord.length - 1] === currentWord[0] || lastWord === '') {
			setLastWord(currentWord);
			setCurrentWord('');
		} else {
			alert('땡!');
			setCurrentWord('');
		}

		inputRef.current.focus();
	};

	return (
		<>
			<div>이전 단어 : {lastWord}</div>
			<div>다음 단어: {currentWord}</div>
			<form onSubmit={onSubmitForm}>
				<input ref={inputRef} type='text' value={currentWord} onChange={onChangeVal} />
				<button>입력</button>
			</form>
		</>
	);
};

module.exports = WordRelay;
