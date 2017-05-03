/**
 * Created by wuhou on 2017/5/2.
 */
import React, { Component } from 'react';

import '../../css/header.css';
import imgLogo from '../../../build/images/logo.png';

export default class Header extends Component {
    getLogo(){
        return (
            <div className="zhu-logo">
                <img src={imgLogo} />
                <span>铸云运营管理系统</span>
            </div>
        );
    }
    onClick(){
        // TODO
    }

    render(){
        return(
            <div className="zhu-ye-top">
                {this.getLogo()}
                <div className="zhu-tui">
                    <span>当前用户:</span>
                    <span>肖胜辉肖胜辉</span>
                    <div className="zhu-tu-biao" onClick={this.onClick.bind(this)}>
                        <i className="fa fa-sign-out fa-1-5x"></i>
                        <span>退出</span>
                    </div>
                </div>
            </div>
        );
    }
}