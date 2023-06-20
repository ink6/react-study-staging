import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  // 清除所有已完成的todo
  handleDeleteAll = () => {
    this.props.handleDeleteAll()
  }
  // 全选/取消全选
  handleCheckAll = (e) => {
    const checked = e.target.checked
    this.props.checkAllTodo(checked)
  }
  // 全选/取消全选2 - 使用ref
  // handleCheckAll2 = () => {
  //   const checked = this.checkedAll.checked
  //   this.props.checkAllTodo(checked)
  // }
  render() {
    const { todos } = this.props
    // 已完成的个数
    // const doneCount = todos.filter(item => item.done).length // filter方法
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0) // reduce方法
    const totalCount = todos.length
    const allChecked =  doneCount === totalCount && totalCount !== 0
    return (
      <div className="todo-footer">
        <label>
          {/* <input type="checkbox" ref={ node => this.checkedAll = node } checked={ allChecked } onChange={ () => this.handleCheckAll2() } /> */}
          <input type="checkbox" checked={ allChecked } onChange={ (e) => this.handleCheckAll(e) } />
        </label>
        <span>
          <span>已完成{ doneCount }</span> / 全部 { totalCount }
        </span>
        <button className="btn btn-danger" onClick={ this.handleDeleteAll }>清除已完成任务</button>
      </div>
    )
  }
}
