// 入口文件
import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 包裹StrictMode 可以帮助我们检查代码里面不合理的地方，比如官方不推荐使用的ref="XXX"写法等
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
ReactDOM.render(<App />, document.getElementById('root'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // 进行页面性能分析的
