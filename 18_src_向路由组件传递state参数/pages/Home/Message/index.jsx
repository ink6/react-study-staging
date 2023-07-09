import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {

  // 向路由组件传递参数
  //   1.params参数
  //     路由链接(携带参数):<Link to='/demo/test/tom/18'>详情</Link>
  //     注册路由(声明接收):<Route path="/demo/test/:name/:age" component={Test}/>
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
  //     备注: BrowserRouter刷新也可以保留住参数， 但HashRouter刷新后会导致路由state参数的丢失！！！

  // ## BrowserRouter与HashRouter的区别
  //   1.底层原理不一样：
	// 					BrowserRouter使用的是H5的history API，不兼容IE9及以下版本。
	// 					HashRouter使用的是URL的哈希值。
	// 		2.path表现形式不一样
	// 					BrowserRouter的路径中没有#,例如：localhost:3000/demo/test
	// 					HashRouter的路径包含#,例如：localhost:3000/#/demo/test
	// 		3.刷新后对路由state参数的影响
	// 					(1).BrowserRouter没有任何影响，因为state保存在history对象中。
	// 					(2).HashRouter刷新后会导致路由state参数的丢失！！！
	// 		4.备注：HashRouter可以用于解决一些路径错误相关的问题。

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
                  {/* <Link to={`/home/message/detail/?id=${ item.id }&title=${ item.title }`}>{ item.title }</Link> */}

                  {/* 向路由组件传递state参数 */}
                  <Link to={{ pathname: '/home/message/detail/', state: { id: item.id, title: item.title } }}>{ item.title }</Link>
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
      </div>
    )
  }
}
