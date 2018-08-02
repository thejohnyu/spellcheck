import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Api from './api';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function ListItem(props) {
	return <li>{props.value}</li>;
}

function DataList(props) {
	const { data } = props;
	return <ul>{data.map((cur, i) => <ListItem key={i} value={cur} />)}</ul>;
}

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
		const value = event.target.value;
		this.setState({ query: value, data: this.state.data });
	}

	async onSubmit(event) {
		event.preventDefault();
		const data = await Api.search(this.state.query);
		this.setState({ query: this.state.query, data: data });
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Search Word</h1>
				</header>
				<TextField name="query" label="Search field" type="search" margin="normal" onChange={this.onChange} />
				<Button onClick={this.onSubmit} color="primary">
					Run Search
				</Button>
				<Button onClick={this.onReset} color="secondary">
					Reset
				</Button>
				<div className="App-body">
					<DataList data={this.state.data} />
				</div>
			</div>
		);
	}
}

export default App;
