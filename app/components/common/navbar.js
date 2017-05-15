/**
 * Created by wuhou on 2017/5/2.
 */
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Link
} from 'react-router-dom';

import '../../css/navbar.css';
import Main from './Main';

const links = [
    {
        to: '/accountManagement',
        name: '账号维护',
        style: 'fa fa-cogs fa-1-3x'
    },
    {
        to: '/',
        name: '客户信息',
        style: 'fa fa-address-card fa-1-3x',
        exact: true
    },
    {
        to: '/orderInfo',
        name: '订单信息',
        style: 'fa fa-newspaper-o fa-1-3x',
    },
    {
        to: '/contracts',
        name: '合同信息',
        style: 'fa fa-gavel fa-1-3x',
    },
    {
        to: '/contacts',
        name: '联系人',
        style: 'fa fa-user-circle-o fa-1-3x',
    },
    {
        to: '/logs',
        name: '联系日志',
        style: 'fa fa-bars fa-1-3x',
    },
];

export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex : 1
        }
    }
    onclick(match, location){
        this.state.activeIndex !== -1 && this.setState({
            activeIndex: -1
        });
        // render content of this item   TODO

        /*if (!match) {
            return false
        }
        const eventID = parseInt(match.params.eventID)
        return !isNaN(eventID) && eventID % 2 === 1*/
    }

    render(){
        return (
            <Router>
                <div>
                    <div className="home-left">
                        <ul>
                            {links.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={link.to}
                                        activeClassName="active"
                                        exact={link.exact}
                                    >
                                        <i className={link.style}></i>
                                        <span>{link.name}</span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Main/>
                </div>
            </Router>
        );
    }
}

