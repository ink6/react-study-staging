import React, { Component } from 'react'
// import qs from 'querystring'

const conData = [
  { id: '01', con: 'message001' },
  { id: '02', con: 'message002' },
  { id: '03', con: 'message003' },
]
export default class Detail extends Component {
  render() {
    console.log(this.props);

    // 接收params参数
    // const { id, title } = this.props.match.params

    // 接收search参数
    // const { search } = this.props.location
    // const { id, title } = qs.parse(search.slice(1))

    // 接收state参数
    const { id, title } = this.props.location.state || {}

    const con = conData.find(obj => {
      return obj.id === id
    }).con
    return (
      <ul>
        <li>ID: { id }</li>
        <li>TITLE: { title }</li>
        <li>CON: { con }</li>
      </ul>
    )
  }
}
