import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './component/Header'
import MyNavLink from './component/MyNavLink'
export default class App extends Component {
  // 解决多级路径刷新页面样式丢失的问题
  //     原本： 
  //       <link rel="stylesheet" href="./css/bootstrap.css"></link>
  //     解决：
  //       1.public/index.html 中 使用/替代./ (常用) 
  //       eg: <link rel="stylesheet" href="/css/bootstrap.css">

  //       2.public/index.html 中 使用%PUBLIC_URL%替代 ./(常用)
  //       eg: <link rel="stylesheet" href="%PUBLIC_URL%/css/bootstrap.css">

  //       3.使用HashRouter代替BrowserRouter
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
              <MyNavLink to="/huagang/about">About</MyNavLink>
              <MyNavLink to="/huagang/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/huagang/about" component={ About } />
                  <Route path="/huagang/home" component={ Home } />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
