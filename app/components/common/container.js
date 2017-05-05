/**
 * Created by wuhou on 2017/5/2.
 */
import React, { Component } from 'react';

import Head from './Header';
import Navbar from './Navbar';

import '../../css/common.css';
import '../../css/font-awesome.css';

export default class Container extends Component {
    render(){
        return (
            <div className="home">
                <Head/>
                <Navbar/>
            </div>
        );
    }
}