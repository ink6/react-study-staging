import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid';
import './index.css'
export default class Header extends Component {
  static propTypes = { // 对接收的props进行：类型、必要性的限制
    addTodo: PropTypes.func.isRequired
  }
  onKeyUpCb = (e) => {
    const keyCode = e.keyCode || e.which || e.charCode; //兼容各浏览器的键盘事件
    const name = e.target.value
    if (keyCode !== 13 || !(name.trim())) return // 判断是否是回车
    const todo = { id: nanoid(), name, done: false }
    this.props.addTodo(todo)
    e.target.value = ''
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={ this.onKeyUpCb } placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
