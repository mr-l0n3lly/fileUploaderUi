import React, {useState, useEffect} from 'react'
// @ts-ignore
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom'
import axios from 'axios'

import Login from './Login'
import Dashboard from './Dashboard'

import PrivateRoute from './Utils/PrivateRoute'
import PublicRoute from './Utils/PublicRoute'
import {getToken, removeUserSession, setUserSession} from './Utils/Common'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <div className="header">
                        <NavLink exact activeClassName="active" to="/">
                            Home
                        </NavLink>
                        <NavLink activeClassName="active" to="/login">
                            Login
                        </NavLink>
                        <small>(Access without token only)</small>
                        <NavLink activeClassName="active" to="/dashboard">
                            FileUpload
                        </NavLink>
                        <small>(Access with token only)</small>
                    </div>
                    <div className="content">
                        <Switch>
                            <PublicRoute path="/login" component={Login} />
                            <PrivateRoute path="/dashboard" component={Dashboard} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
