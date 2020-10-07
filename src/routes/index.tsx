import CreateTeam from 'pages/CreateTeam'
import MyTeam from 'pages/MyTeam'
import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import PageTemplate from 'templates/PageTemplate'

import { routesEnum } from './routesData'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* {routesData.map(({ component, path, name }) => (
          <Route key={name} exact path={path}>
            <PageTemplate>{component()}</PageTemplate>
          </Route>
        ))} */}
        <Route key="My Team" exact path={routesEnum.MY_TEAM}>
          <PageTemplate>
            <MyTeam />
          </PageTemplate>
        </Route>
        <Route key="Create Team" exact path={routesEnum.CREATE_TEAM}>
          <PageTemplate>
            <CreateTeam />
          </PageTemplate>
        </Route>
        <Redirect from={'*'} to="/" />
      </Switch>
    </BrowserRouter>
  )
}
