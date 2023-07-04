import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './component/Header'
import MyNavLink from './component/MyNavLink'
export default class App extends Component {
  // 路由组件与一般组件
  //   1.写法不同:
  //     一般组件:<Demo/>
  //     路由组件: <Route path="/demo” component={Demo}/>
  //   2.存放位置不同:
  //     一般组件: components
  //     路由维件: pages
  //   3.接收到的props不同:
  //     一般组件:写组件标签时传递了什么，就能收到什么
  //     路由组件:接收到三个周定的属性
  //     history:
  //       go:fgo(n)
  //       goBack:f goBack()
  //       goForward;f goForward()
  //       push: f push(path,state)replace: f replace(path,state)
  //     location:
  //       pathname:"/about"
  //       search:.nn
  //       state: undefined
  //     match:
  //       params: i
  //       path: "/about"
  //       url: "/about"
  
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 在原生html中 靠<a></a>跳转不同的页面 */}
              {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}

              {/* 在react中靠路由链接实现切换组件 -- 编写路由链接 */}
              {/* <NavLink activeClassName="self-active" className="list-group-item" to="/about" >About</NavLink>
              <NavLink activeClassName="self-active" className="list-group-item" to="/home" >Home</NavLink> */}
              {/* 自定义NavLink */}
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Route path="/about" component={ About } />
                <Route path="/home" component={ Home } />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
