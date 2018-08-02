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
			data: []
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
		this.setState({ query: '', data: [] });
	}

	onChange(event) {
		this.setState({ query: event.target.value, data: this.state.data });
	}

	async onSubmit(event) {
		event.preventDefault();
		const { data } = await Api.search(this.state.query);
		this.setState({ query: this.state.query, data: data });
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Search Word</h1>
				</header>
				<div className="App-body">
					<form onSubmit={this.onSubmit}>
						<TextField
							name="query"
							label="Search field"
							type="text"
							margin="normal"
							onChange={this.onChange}
						/>
					</form>
					<ul>{this.state.data.map((word, i) => <li key={i}>{word}</li>)}</ul>
				</div>
			</div>
		);
	}
}

export default App;
