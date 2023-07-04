import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  render() {
    const { user } = this.props
    return (
      <div className="card" >
        <a href={ user.html_url } rel="noreferrer"  target="_blank">
          <img alt="avatar" src={ user.avatar_url } style={{width: '100px'}}/>
        </a>
        <p className="card-text">{ user.login }</p>
      </div>
    )
  }
}
