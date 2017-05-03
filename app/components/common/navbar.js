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
import AccountManagement from '../accountManagement/AccountManagement';
import ClientInfo from '../clientInfo/ClientInfo';
import OrderInfo from '../orderInfo/OrderInfo';
import Contracts from '../contracts/Contracts';
import Logs from '../logs/Logs';
import Contacts from '../contacts/Contacts';

export default class Navbar extends Component {
    render(){
        return (
            <Router>
                <div>
                <div className="zhu-ye-left">
                    <ul>
                        <li>
                            <Link to="/accountManagement">
                                <i className="fa fa-cogs fa-1-3x"></i>
                                <span>账号维护</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/clientInfo">
                                <i className="fa fa-address-card fa-1-3x"></i>
                                <span>客户信息</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/orderInfo">
                                <i className="fa fa-newspaper-o fa-1-3x"></i>
                                <span>订单信息</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contracts">
                                <i className="fa fa-gavel fa-1-3x"></i>
                                <span>合同信息</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacts">
                                <i className="fa fa-user-circle-o fa-1-3x"></i>
                                <span>联系人</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/logs">
                                <i className="fa fa-bars fa-1-3x"></i>
                                <span>联系日志</span>
                            </Link>
                        </li>

                    </ul>
                </div>

                <Route exact path="/accountManagement" component={AccountManagement}/>
                <Route path="/clientInfo" component={ClientInfo}/>
                <Route path="/orderInfo" component={OrderInfo}/>
                <Route path="/contracts" component={Contracts}/>
                <Route path="/logs" component={Logs}/>
                <Route path="/contacts" component={Contacts}/>
                </div>
            </Router>
        );
    }
}
