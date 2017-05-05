/**
 * Created by wuhou on 2017/5/4.
 */
import React, { Component } from 'react';

export default class PrimaryBtn extends Component {
    render(){
        return (
            <button className="button-primary">{this.props.text}</button>
        );
    }
}