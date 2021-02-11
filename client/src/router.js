import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './pages/Home/Home'
import { Catalog } from './pages/Catalog/Catalog'

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/catalog" exact>
                <Catalog />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}