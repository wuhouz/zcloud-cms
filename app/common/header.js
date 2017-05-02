/**
 * Created by wuhou on 2017/5/2.
 */
import React, { Component } from 'react';

import '../css/header.css';

export default class Header extends Component {
    render(){
        return(
            <div className="zhu-ye-top">
                <div className="zhu-logo">
                    <img src="./images/logo.png" />
                    <span>铸云运营管理系统</span>
                </div>
                <div className="zhu-tui">
                    <span>当前用户:</span>
                    <span>肖胜辉肖胜辉</span>
                    <div className="zhu-tu-biao">
                        <i className="fa fa-sign-out fa-1-5x"></i><
                        span>退出</span>
                    </div>
                </div>
            </div>
        );
    }
}