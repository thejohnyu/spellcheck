import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import words from './words'
import SpellChecker from './spellchecker'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

function ListItem (props) {
  return <li>
           {props.value}
         </li>
}

function DataList (props) {
  const {data} = props
  return (
    <ul>
      {data.map((cur, i) => <ListItem key={i} value={cur} />
       )}
    </ul>
  )
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      query: '',
      data: []
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onReset = this.onReset.bind(this)
  }

  componentDidMount () {
    this.setState({ query: '', data: words})
  }

  onChange (event) {
    const value = event.target.value
    const test = SpellChecker(value)
    this.setState({ query: value})
  }

  onSubmit (event) {
    event.preventDefault()
    const queryCondition = this.state.query
    const data = words.filter(word => word === queryCondition)
    this.setState({data})
  }

  onReset (event) {
    event.preventDefault()
    this.setState({ query: '', data: words})
  }

  render () {
    const { data } = this.state
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Search Word</h1>
        </header>
        <TextField
          name='query'
          label='Search field'
          type='search'
          margin='normal'
          onChange={this.onChange} />
        <Button onClick={this.onSubmit} color='primary'>
          Run Search
        </Button>
        <Button onClick={this.onReset} color='secondary'>
          Reset
        </Button>
        <div className='App-body'>
          <DataList data={data} />
        </div>
      </div>
    )
  }
}

export default App
