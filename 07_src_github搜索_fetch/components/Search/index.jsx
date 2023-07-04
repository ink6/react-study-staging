import React, { Component } from 'react'
import PubSub from 'pubsub-js';
// import axios from "axios";
export default class Search extends Component {
  search = async () => {
    // 获取用户输入(连续结构赋值 + 重命名)
    const { keyWordElement: { value: keyWord } } = this
    // 发送请求前通知App更新状态
    // this.props.updateAppState({ isFirst: false, isLoading: true })
    PubSub.publish('getList', { isFirst: false, isLoading: true })
    // 发送网络请求 - axios
    // axios.get(`/search/users?q=${ keyWord }`)
    // .then(
    //   res => {
    //     const { data, status } = res
    //     if (status === 200) {
    //       // this.props.updateAppState({ isLoading: false, userList: data.items })
    //       PubSub.publish('getList', { isLoading: false, userList: data.items })
    //     }
    //   },
    //   err => {
    //     // this.props.updateAppState({ isLoading: false, err: err.message })
    //     PubSub.publish('getList', { isLoading: false, err: err.message })
    //   }
    // )

    // 发送网络请求 - fetch(未优化)
    // fetch(`/search/users2?q=${ keyWord }`)
    // .then(res => {
    //   console.log('链接服务器成功了', res);
    //   return res.json()
    // }, err => {
    //   console.log('链接服务器失败了', err);
    // })
    // .then(res => {
    //   console.log('获取数据成功了', res);
    // }, err => {
    //   console.log('获取数据失败了', err);
    // })

    // 发送网络请求 - fetch(优化) - catch
    // fetch(`/search/users2?q=${ keyWord }`)
    // .then(res => {
    //   console.log('链接服务器成功了', res);
    //   return res.json()
    // })
    // .then(res => {
    //   console.log('获取数据成功了', res);
    // })
    // .catch(err => {
    //   console.log('链接服务器失败了');
    // })

    // 发送网络请求 - fetch(优化 - await)
    try {
      const res = await fetch(`/search/users2?q=${ keyWord }`)
      const data = await res.json()
      console.log(data);
      PubSub.publish('getList', { isLoading: false, userList: data.items })
    } catch (error) {
      console.log(error);
      PubSub.publish('getList', { isLoading: false, err: error.message })
    }
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
