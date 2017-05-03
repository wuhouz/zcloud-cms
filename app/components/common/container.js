/**
 * Created by wuhou on 2017/5/2.
 */
import React, { Component } from 'react';

import Head from './header';
import Navbar from './navbar';

import '../../css/container.css';
// import '../css/font-awesome.css';  TODO

export default class Container extends Component {
    render(){
        return (
            <div className="zhu-ye">
                <Head/>
                <Navbar/>
            </div>
        );
    }
}