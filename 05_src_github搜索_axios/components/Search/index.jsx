import React, { Component } from 'react'
import axios from "axios";
export default class Search extends Component {
  search = () => {
    // 获取用户输入(连续结构赋值 + 重命名)
    const { keyWordElement: { value: keyWord } } = this
    // 发送请求前通知App更新状态
    this.props.updateAppState({ isFirst: false, isLoading: true })
    // 发送网络请求
    axios.get(`/search/users?q=${ keyWord }`)
    .then(
      res => {
        const { data, status } = res
        if (status === 200) {
          this.props.updateAppState({ isLoading: false, userList: data.items })
        }
      },
      err => {
        this.props.updateAppState({ isLoading: false, err: err.message })
      }
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={node => this.keyWordElement = node} type="text" placeholder="enter the name you search"/>&nbsp;
          <button onClick={ this.search }>Search</button>
        </div>
      </section>
    )
  }
}
