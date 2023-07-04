import React, { Component } from 'react'
import Item from '../Item'
import PubSub from 'pubsub-js'
import './index.css'
export default class List extends Component {
  state = {
    isFirst: true, // 是否是第一次打开页面
    isLoading: false,
    err: '',
    userList: [],
  }
  getList = (msg, data) => {
    this.setState(data)
  }
  componentDidMount () {
    this.token = PubSub.subscribe('getList', this.getList)
  }
  componentWillUnmount () {
    PubSub.unsubscribe(this.token)
  }
  render() {
    const { userList, isFirst, isLoading, err } = this.state
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
