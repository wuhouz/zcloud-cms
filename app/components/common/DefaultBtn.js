/**
 * Created by wuhou on 2017/5/4.
 */
import React, { Component } from 'react';

//类组件
/*export default class DefaultBtn extends Component {
    render(){
        return (
            <button className="button-default">{this.props.text}</button>
        );
    }
}*/

//函数式组件：一种只能接受 props 和提供 render 方法的类组件。


export default class DefaultBtn extends Component {
    render(){
        return (
            <button className="button-default">{this.props.text}</button>
        );
    }
};