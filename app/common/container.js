/**
 * Created by wuhou on 2017/5/2.
 */
import React, { Component } from 'react';

import Head from './header';
import Navbar from './navbar';
import Main from './main';

import '../css/container.css';

export default class Container extends Component {
    render(){
        return (
            <div className="list">
                <Head/>
                <Navbar/>
                <Main/>
            </div>
        );
    }
}