import React from 'react'
import {
  Switch, Route, Redirect, routerRedux,
} from 'dva/router'
import dynamic from 'dva/dynamic'

import { Menu } from 'antd'
import App from './App'

const { ConnectedRouter } = routerRedux

const Router = ({ history, app }) => {
  const routes = [
    {
      path: '/dashboard',
      models: () => [import('./pages/DashBoard/model')],
      component: () => import('./pages/DashBoard/DashBoard'),
    },
  ]

  const navs = (
    <Menu
      theme="dark"
      mode="horizontal"
      style={{ lineHeight: '64px' }}
      defaultSelectedKeys={['1']}
    >
      <Menu.Item key="1">Dash Board</Menu.Item>
      <Menu.Item key="2">About</Menu.Item>
      <Menu.Item key="3">Featured Job</Menu.Item>
    </Menu>
  )

  return (
    <ConnectedRouter history={history}>
      <App navs={navs}>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/dashboard" />)} />
          {
            routes.map(({ path, ...dynamics }) => {
              const Dynamic = dynamic({
                app,
                ...dynamics,
              })
              return (
                <Route
                  key={path}
                  exact
                  path={path}
                  component={Dynamic}
                />
              )
            })
          }
        </Switch>
      </App>
    </ConnectedRouter>
  )
}

export default Router
