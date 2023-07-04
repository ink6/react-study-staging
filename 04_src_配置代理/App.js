import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
  getStudentData = () => {
    axios.get('/api1/students')
    .then(res => {
      console.log(res);
    })
  }
  getCarData = () => {
    axios.get('/api2/cars')
    .then(res => {
      console.log(res);
    })
  }
  render() {
    return (
      <div>
        <button onClick={ this.getStudentData }>发送students请求</button>
        <button onClick={ this.getCarData }>发送cars请求</button>
      </div>
    )
  }
}
