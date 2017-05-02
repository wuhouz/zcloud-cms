/**
 * Created by wuhou on 2017/5/2.
 */
import React, { Component } from 'react';

import '../css/navbar.css';

export default class Navbar extends Component {
    render(){
        return (
            <div className="zhu-ye-left">
                <ul>
                    <li><a href="javascript:;"><i className="fa fa-cogs fa-1-3x"></i><span>账号维护</span></a></li>
                    <li><a href="javascript:;" className="active"><i className="fa fa-address-card fa-1-3x"></i><span>客户信息</span></a></li>
                    <li><a href="javascript:;"><i className="fa fa-newspaper-o fa-1-3x"></i><span>订单信息</span></a></li>
                    <li><a href="javascript:;"><i className="fa fa-gavel fa-1-3x"></i><span>合同信息</span></a></li>
                    <li><a href="javascript:;" ><i className="fa fa-user-circle-o fa-1-3x"></i><span>联系人</span></a></li>
                    <li><a href="javascript:;"><i className="fa fa-bars fa-1-3x"></i><span>联系日志</span></a></li>
                </ul>
            </div>
        );
    }
}