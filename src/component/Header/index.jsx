import React, { Component } from 'react'
import { Layout, Avatar, Menu, Dropdown } from 'antd'
import styles from './Header.scss'
const Electron = window.electron

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" disabled>3rd menu item（disabled）</Menu.Item>
  </Menu>
)

export default class Header extends Component {
  aa = () => {
    Electron.ipcRenderer.send('minimize')
  }

  bb = () => {
    Electron.ipcRenderer.send('hide')
  }

  render() {
    const { Header } = Layout
    return (
      <Header className={styles.header} style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className={`flex flex_justify_between flex_align_center`}>
          <div className={`${styles.headtitle}`}>react-electron</div>
          <div className={`flex flex_justify_center flex_align_center`}>
            <Dropdown className={`nodrag`} overlay={menu}>
              <Avatar size='large'>U</Avatar>
            </Dropdown>
            <div className={`flex ${styles.namemain}`}>
              <div onClick={this.bb}>管理员</div>
              <img src="../../assets/icon/close.svg" alt=""/>
            </div>
          </div>
        </div>
      </Header>
    )
  }
}