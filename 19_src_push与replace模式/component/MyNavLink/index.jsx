import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    // console.log(this.props); // {to: '/about', children: 'About'} 属性标签children: 'About' 与标签体内容<NavLink>About</NavLink>相同
    return (
      <NavLink activeClassName="self-active" className="list-group-item" { ...this.props } />
    )
  }
}
