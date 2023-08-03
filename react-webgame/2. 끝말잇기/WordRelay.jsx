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

// Class Component
// class WordRelayC extends Component {
// 	state = {
// 		word: '제로초',
// 		value: '',
// 		result: '',
// 	};

// 	onSubmitForm = (e) => {
// 		e.preveDefault();
// 		if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
// 			this.setState({
// 				result: '딩동댕',
// 				word: value,
// 				value: '',
// 			});
// 			this.input.focus();
// 		} else {
// 			this.setState({
// 				result: '땡',
// 				value: '',
// 			});
// 			this.input.focus();
// 		}
// 	};

// 	onChangeInput = (e) => {
// 		this.setState({ value: e.target.value });
// 	};

// 	input;

// 	onRefInput = (c) => {
// 		this.input = c;
// 	};

// 	render() {
// 		return (
// 			<>
// 				<div>{this.state.word}</div>
// 				<form onSubmit={this.onSubmitForm}>
// 					<input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
// 					<button>입력</button>
// 				</form>
// 			</>
// 		);
// 	}
// }

module.exports = WordRelay;
