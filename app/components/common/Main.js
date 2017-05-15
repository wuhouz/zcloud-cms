/**
 * Created by wuhou on 2017/5/3.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import '../../css/main.css';

import AccountManagement from '../accountManagement/AccountManagement';
import ClientInfo from '../ClientInfo';
import OrderInfo from '../orderInfo/OrderInfo';
import Contracts from '../contracts/Contracts';
import Logs from '../logs/Logs';
import Contacts from '../contacts/Contacts';

const routes = [
    {
        exact: false,
        path: '/accountManagement',
        component: AccountManagement
    },
    {
        exact: true,
        path: '/',
        component: ClientInfo
    },
    {
        exact: false,
        path: '/orderInfo',
        component: OrderInfo
    },
    {
        exact: false,
        path: '/contracts',
        component: Contracts
    },
    {
        exact: false,
        path: '/logs',
        component: Logs
    },
    {
        exact: false,
        path: '/contacts',
        component: Contacts
    },
];
export default class Main extends Component {
    render(){
        return (
            <div className="home-right">
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}
            </div>
        );
    }
}