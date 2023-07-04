import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {

  // 向路由组件传递search参数
  //     路由链接(携带参数):<Link to='/demo/test?name=tom&age=18'>详情</Link>
  //     注册路由(无需声明，正常注册即可):<Route path="/demo/test" component={Test}/>
  //     接收参数: this.props.location.search
  //     备注: 获取到的search是urlencoded编码字符串，需要借助querystring解析

  state = {
    msgArr: [
      { id: '01', title: 'title001' },
      { id: '02', title: 'title002' },
      { id: '03', title: 'title003' },
    ]
  }
  render() {
    const { msgArr } = this.state
    return (
      <div>
        <ul>
          {
            msgArr.map(item => {
              return (
                <li key={ item.id }>
                  {/* 向路由组件传递params参数 */}
                  {/* <Link to={`/home/message/detail/${ item.id }/${ item.title }`}>{ item.title }</Link> */}

                  {/* 向路由组件传递search参数 */}
                  <Link to={`/home/message/detail/?id=${ item.id }&title=${ item.title }`}>{ item.title }</Link>

                </li>
              )
            })
          }
        </ul>
        {/* 声明接收params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={ Detail } /> */}

        {/* search参数无需声明接收 正常注册路由即可 */}
        <Route path="/home/message/detail" component={ Detail } />

      </div>
    )
  }
}
