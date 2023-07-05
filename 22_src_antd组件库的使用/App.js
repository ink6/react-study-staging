import React, { Component } from 'react'
import { Button, ConfigProvider } from 'antd'
import { WechatOutlined } from '@ant-design/icons';
export default class App extends Component {
  render() {
    return (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b',
            colorLink: '#00b96b',
          },
        }}
      >
        <div>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
          <hr />
          <WechatOutlined />
        </div>
      </ConfigProvider>
      )
  }
}