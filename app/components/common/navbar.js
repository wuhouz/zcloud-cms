/**
 * Created by wuhou on 2017/5/2.
 */
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
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
        to: '/clientInfo',
        name: '客户信息',
        style: 'fa fa-address-card fa-1-3x',
        isActive: true
    },
    {
        to: '/orderInfo',
        name: '订单信息',
        style: 'fa fa-newspaper-o fa-1-3x',
        isActive: false
    },
    {
        to: '/contracts',
        name: '合同信息',
        style: 'fa fa-gavel fa-1-3x',
        isActive: false,
    },
    {
        to: '/contacts',
        name: '联系人',
        style: 'fa fa-user-circle-o fa-1-3x',
        isActive: false,
    },
    {
        to: '/logs',
        name: '联系日志',
        style: 'fa fa-bars fa-1-3x',
        isActive: false,
    },
];

export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex : 1
        }
    }

    click(index){
        this.setState({
            activeIndex : index
    });
    }

    render(){
        return (
            <Router>
                <div>
                    <div className="zhu-ye-left">
                        <ul>
                            {links.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.to}
                                        className={index === this.state.activeIndex ? 'active' : ''}
                                        onClick={this.click.bind(this,index)}
                                    >
                                        <i className={link.style}></i>
                                        <span>{link.name}</span>
                                    </Link>
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
