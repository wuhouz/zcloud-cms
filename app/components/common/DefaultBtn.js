/**
 * Created by wuhou on 2017/5/4.
 */
import React, { Component } from 'react';

export default class DefaultBtn extends Component {
    render(){
        return (
            <button className="button-default">{this.props.text}</button>
        );
    }
}