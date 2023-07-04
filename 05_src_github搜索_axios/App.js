import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
import './App.css'
export default class App extends Component {
  state = {
    isFirst: true, // 是否是第一次打开页面
    isLoading: false,
    err: '',
    userList: [],
  }
  updateAppState = (info) => {
    this.setState({
      ...info
    })
  }
  render() {
    return (
      <div className="container">
        <Search updateAppState={ this.updateAppState } />
        <List { ...this.state } />
      </div>
    )
  }
}
