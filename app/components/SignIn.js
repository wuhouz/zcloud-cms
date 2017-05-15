/**
 * Created by wuhou on 2017/5/5.
 */
import React, { Component } from 'react';

import '../css/signIn.css';

export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            account: '',
            password: '',
        };
    }

    getInput(type, e){
        console.log(this);
        switch(type){
            case 'account':
                this.setState({
                    account: e.target.value
                });
                break;
            case 'password':
                this.setState({
                    password: e.target.value
                });
                break;
            default:

        }
    }

    submit(){

    };

    render(){
        return (
            <div className="zhu-bnr">
                <form onSubmit={this.submit}>
                    <div className="zhu-bnr-center">
                        <ul>
                            <li><span>铸云运营管理系统</span></li>
                            <li><input name='account' placeholder="账号" onChange={this.getInput.bind(this, 'account')} value={this.state.account}/></li>
                            <li><input name='password' placeholder="密码" onChange={this.getInput.bind(this, 'password')} value={this.state.password}/></li>
                            <li><button>登录</button></li>
                        </ul>
                    </div>
                </form>
            </div>
        );
    };

}