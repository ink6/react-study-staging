import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
export default class App extends Component {
  /*
    todoList案例相关知识点
      1.拆分组件实现静态组件，注意: className、style的写法
      2.动态初始化列表，如何确定将数据放在哪个组件的state中?
        -某个组件使用:放在其自身的state中
        -某些组件使用:放在他们共同的父组件state中(官方称此探作为: 状态提升)
      3.关于父子之间通信:
        1.[父组件] 给[子组件] 传递数据: 通过props传递
        2.[子组件]给[父组件] 传递数据: 通过props传递，要求父提前给了传递一个函数
      4.注意defaultChecked 和 checked的区别，类似的还有: defaultValue 和 value
      5.状态在哪里，操作状态的方法就在哪里 
  */

  // 状态在哪里 操作状态的方法就在哪里
  // 初始化状态
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '打豆豆', done: false },
      { id: '004', name: '骂人', done: true }
    ]
  }
  // 添加一个对象
  addTodo = (todo) => {
    const newTodos = [todo, ...this.state.todos]
    this.setState({ todos: newTodos })
  }
  // updateTodo 用于更新一个todo对象
  updateTodo = (id, done) => {
    const { todos } = this.state
    // 加工数据
    const newTodos = todos.map(item => {
      if (item.id === id) {
        return { ...item, done }
      } else {
        return item
      }
    })
    this.setState({ todos: newTodos })
  }
  // checkAllTodo 切换全选/取消全选
  checkAllTodo = (done) => {
    const { todos } = this.state
    const newTodos = todos.map(item => ({ ...item, done }))
    this.setState({ todos: newTodos })
  }
  // deleteTodo 用于删除一个todo对象
  deleteTodo = (id) => {
    const { todos } = this.state
    // filter 写法
    // const newTodos = todos.filter(item => item.id !== id)
    // this.setState({ todos: newTodos })

    // splice写法
    let inx = -1
    todos.forEach((item, index) => {
      if (item.id === id) {
        inx = index
      }
    })
    todos.splice(inx, 1)
    this.setState({ todos })
  }
  // 删除选中的所有todo
  handleDeleteAll = () => {
    const { todos } = this.state
    const newTodos = todos.filter(item => !item.done)
    this.setState({ todos: newTodos })
  }
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={ this.addTodo } />
          <List todos={ this.state.todos } updateTodo={ this.updateTodo } deleteTodo={ this.deleteTodo } />
          <Footer todos={ this.state.todos } handleDeleteAll={ this.handleDeleteAll } checkAllTodo={ this.checkAllTodo } />
        </div>
      </div>
    )
  }
}
