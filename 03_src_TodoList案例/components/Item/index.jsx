import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  // 勾选 、 取消勾选某一个todo的回调
  handleCheck = (id) => {
    return (event) => {
      const done = event.target.checked
      this.props.updateTodo(id, done)
    }
  }
  // 删除一个todo的回调
  handleDelete = (id) => {
    if(window.confirm('您确定要删除吗？')) {
      this.props.deleteTodo(id)
    }
  }
  render() {
    const { id, name, done } = this.props
    return (
      <li>
        <label>
          <input type="checkbox" checked={ done } onChange={ this.handleCheck(id) }/>
          <span> { id } = { name } = </span> 
          <span>
            {
              done? '勾选': '不勾选'
            }
          </span> 
        </label>
        <button className="btn btn-danger" onClick={ () => this.handleDelete(id) }>删除</button>
      </li>
    )
  }
}
