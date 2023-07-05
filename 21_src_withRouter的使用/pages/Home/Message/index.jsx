import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
  // 向路由组件传递参数
  //   1.params参数
  //     路由链接(携带参数):<Link to='/demo/test/tom/18'>详情</Link>
  //     注册路山(声明接收):<Route path="/demo/test/:name/:age" component={Test}/>
  //     接收参数: this.props.match.params
  //   2.search参数
  //     路由链接(携带参数):<Link to='/demo/test?name=tom&age=18'>详情</Link>
  //     注册路由(无需声明，正常注册即可):<Route path="/demo/test" component={Test}/>
  //     接收参数: this.props.location.search
  //     备注: 获取到的search是urlencoded编码字符串(?name=tom&age=18)，需要借助querystring解析
  //   3.state参数
  //     路由链接(携带参数):<Link to={{pathname:'/demo/test',state:(name:'tom',age:18)}}>详情</Link>
  //     注册路由(无需声明，正常注册即可):<Route path="/demo/test”component={Test}/>
  //     接收参数: this.props.location.state
  //     备注: 刷新也可以保留住参数

  state = {
    msgArr: [
      { id: '01', title: 'title001' },
      { id: '02', title: 'title002' },
      { id: '03', title: 'title003' },
    ]
  }
  pushShow = (id, title) => {
    // push跳转 + 携带params参数
    // this.props.history.push(`/home/message/detail/${ id }/${ title }`)

    // push跳转 + 携带search参数
    // this.props.history.push(`/home/message/detail?id=${ id }&title=${ title }`)
    
    // push跳转 + 携带state参数
    this.props.history.push('/home/message/detail', { id, title })
  }
  replaceShow = (id, title) => {
    // replace跳转 + 携带params参数
    // this.props.history.replace(`/home/message/detail/${ id }/${ title }`)

    // replace跳转 + 携带search参数
    // this.props.history.replace(`/home/message/detail?id=${ id }&title=${ title }`)

    // replace跳转 + 携带state参数
    this.props.history.replace('/home/message/detail', { id, title })
  }
  back = () => {
    this.props.history.goBack()
  }
  forward = () => {
    this.props.history.goForward()
  }
  go = () => {
    this.props.history.go(-1)
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
                  {/* <Link to={`/home/message/detail/?id=${ item.id }&title=${ item.title }`}>{ item.title }</Link> */}

                  {/* 向路由组件传递state参数 */}
                  <Link to={{ pathname: '/home/message/detail', state: { id: item.id, title: item.title } }}>{ item.title }</Link>
                  <button onClick={ () => this.pushShow(item.id, item.title) }>push跳转</button>
                  <button onClick={ () => this.replaceShow(item.id, item.title) }>replace跳转</button>
                </li>
              )
            })
          }
        </ul>
        {/* 声明接收params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={ Detail } /> */}

        {/* search参数无需声明接收 正常注册路由即可 */}
        {/* <Route path="/home/message/detail" component={ Detail } /> */}

        {/* state参数无需声明接收 正常注册路由即可 */}
        <Route path="/home/message/detail" component={ Detail } />
        <hr />
        <button onClick={ this.back }>back</button>
        <button onClick={ this.forward }>forward</button>
        <button onClick={ this.go }>go</button>
      </div>
    )
  }
}
