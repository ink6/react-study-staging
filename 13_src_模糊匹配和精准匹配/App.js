import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Test from './pages/Test'
import Header from './component/Header'
import MyNavLink from './component/MyNavLink'
export default class App extends Component {
  // 路由的严格匹配与模糊匹配
  //   1.默认使用的是模糊匹配(简单记: [输入的路径] 必须包含要[匹配的路径]，且顺序要一致)
  //   2.开启严格匹配:<Route exact=(true) path="/about" component={About)/>
  //   3.严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由
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
              <MyNavLink to="/home/a/b">Home/a/b</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  {/* exact 用于精准匹配 */}
                  <Route exact path="/about" component={ About } />
                  <Route exact path="/home/a/b" component={ Test } />
                  <Route exact path="/home" component={ Home } />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
