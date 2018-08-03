import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Api from './api';
import TextField from '@material-ui/core/TextField';

class App extends Component {
	constructor() {
		super();
		this.state = {
			query: '',
			spellcheck: ''
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
		this.setState({ query: '', spellcheck: '' });
	}

	onChange(event) {
		this.setState({ query: event.target.value, spellcheck: this.state.spellcheck });
	}

	async onSubmit(event) {
		event.preventDefault();
		const { spellcheck } = await Api.search(this.state.query);
		this.setState({ query: this.state.query, spellcheck: spellcheck });
	}

	render() {
		const { spellcheck } = this.state;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Search Word</h1>
				</header>
				<div className="App-body">
					{spellcheck ? <h1>Spellcheck: {spellcheck}</h1> : null}
					<form onSubmit={this.onSubmit}>
						<TextField
							name="query"
							label="Search field"
							type="text"
							margin="normal"
							onChange={this.onChange}
						/>
					</form>
					{/* <ul>{data.map((word, i) => <li key={i}>{word}</li>)}</ul> */}
				</div>
			</div>
		);
	}
}

export default App;
