import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './component/Header'
import MyNavLink from './component/MyNavLink'
export default class App extends Component {
  // Redirect的使用
  //   1.一般写在所有路由注册的最下方， 当所有路由都无法匹配时跳转到Redirect指定的路由
  //   2.具体编码:
  //   <Switch>
  //     <Route path="/about"component={About}/>
  //     <Route path="/home" component={Home}/>
  //     <Redirect to="/about"/>
  //   </Switch>
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
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/about" component={ About } />
                  <Route path="/home" component={ Home } />
                  <Redirect to="/about" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
