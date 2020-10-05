import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import PageTemplate from 'templates/PageTemplate'

import { routesData } from './routesData'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {routesData.map(({ component, path, name }) => (
          <Route key={name} exact path={path}>
            <PageTemplate>{component()}</PageTemplate>
          </Route>
        ))}
        <Redirect from={'*'} to="/" />
      </Switch>
    </BrowserRouter>
  )
}
