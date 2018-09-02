import React, { Component } from 'react';
import { Router,Route,Link } from 'react-router-dom';
import history from './history';
import Login from '../loginComponent/login'
import Navbar from '../navbar/index';
import Dashboard from '../dashboard/dashboard'

class Routers extends Component{
    render(){
        return(
            <Router history={history}>
            <div>
                <Navbar />
                <Route exact path="/" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
                </div>
            </Router>
        )
    }
}
export default Routers;