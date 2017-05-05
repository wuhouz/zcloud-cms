/**
 * Created by wuhou on 2017/5/5.
 */
import React, { Component } from 'react';

export default class SelectTime extends Component {
    render(){
        return (
            <div>
                <select className="form-control" style={{height: 30}}>
                    <option value="0">到期时间</option>
                    <option value="1">备案时间</option>
                    <option value="2">注册时间</option>
                    <option value="3">到期时间</option>
                </select>
                <span>开始时间:</span><input type="text" />
                <i className="fa fa-calendar-o"></i>
                <span>结束时间:</span><input type="text" />
                <i className="fa fa-calendar-o"></i>
            </div>
        );
    }
}