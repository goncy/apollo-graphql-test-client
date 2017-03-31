import React, {Component} from 'react'

import ChannelList from './components/ChannelList'

import logo from './logo.svg'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Apollo</h2>
        </div>
        <div className="App-intro">
          <ChannelList />
        </div>
      </div>
    )
  }
}

export default App