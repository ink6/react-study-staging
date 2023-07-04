import React, { Component } from 'react'
import Item from '../Item'
import './index.css'
export default class List extends Component {
  render() {
    const { userList, isFirst, isLoading, err } = this.props
    return (
      <div className="row">
        {
          isFirst?(<h2>欢迎使用，输入关键字，随后点击搜索</h2>):
          isLoading? (<h2>Loading。。。。</h2>):
          err? <h2 style={{ color: 'red' }}>{ err }</h2>:
          userList.map(item => <Item user={ item } key={ item.id } />)
        }
      </div>
    )
  }
}
