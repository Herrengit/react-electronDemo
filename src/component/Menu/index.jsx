import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { withRouter } from 'react-router-dom'

@withRouter
export default class Layout extends Component {
  rootSubmenuKeys = ['xiaozhen', 'shequ']

  state = {
    openKeys: ['xiaozhen'],
    MenuList: [
      {
        key: 'xiaozhen',
        name: '测试',
        item: [
          {
            name: '测试',
            link: '/'
          },
          {
            name: '测试',
            link: '/cs'
          }
        ]
      },
      {
        key: 'shequ',
        name: '测试',
        item: [
          {
            name: '测试',
            link: '/'
          },
          {
            name: '测试',
            link: '/cs'
          }
        ]
      }
    ]
  }

  onOpenchange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys })
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      })
    }
  }

  onThunk (router) {
    this.props.history.push(router)
  }

  render() {
    const SubMenu = Menu.SubMenu
    // console.log(this.props)
    return (
      <Menu
        mode='inline'
        defaultSelectedKeys={['xiaozhen0']}
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenchange}
        style={{width: 190}}
        >
        {
          this.state.MenuList.map((v, i) => {
            return (
              <SubMenu key={v.key} title={<span><Icon type="mail" /><span>{v.name}</span></span>}>
                {
                  v.item.map((k, j) => {
                    return <Menu.Item key={`${v.key}${j}`} onClick={() => this.onThunk(k.link)} >{k.name}</Menu.Item>
                  })
                }
              </SubMenu>
            )
          })
        }
        
      </Menu>
    )
  }
}