/**
 * Created by wuhou on 2017/5/3.
 */
import React, { Component } from 'react';

import '../css/ClientInfo.css';

import PrimaryBtn from './common/PrimaryBtn';
import DefaultBtn from './common/DefaultBtn';
import SearchBtn from './common/SearchBtn';
import SelectTime from './common/SelectTime';

class Top extends Component {
    render(){
        return(
            <div className="button">
                <div className="button-left">
                    <PrimaryBtn text={"添加"}/>
                    <DefaultBtn text={"删除"}/>
                </div>
                <div className="button-right">
                    <input placeholder="关键字搜索" />
                    <SearchBtn />
                </div>
                <div className="button-zhong">
                    <SelectTime/>
                </div>
            </div>
        );
    }
}

class Table extends Component {

    /*componentWillMount(){
        const url = 'http://www.czloud.com/project/task/list/v1/?type=myDuty&startNum=0&count=1000&project_id=69c68048-9487-4e8a-a12a-0bfc4c3eb555&name=&language=zh_CN';
        const url1 = 'http://webservice.36wu.com/weatherService.asmx';
        fetch(url1).then((res) => res.json()).then((json) => {
            console.log(json);
        }).catch((error) => {
            console.log(error);
        });
    }*/
    render(){
        return (
            <div className="list-one">
                <Th/>
                <Tb/>
            </div>
        );
    }
}
class Th extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                { name: '编号'},
                { name: '客户名称'},
                { name: '备案时间'},
                { name: '注册时间'},
                { name: '到期时间'},
                { name: '客户意向'},
                { name: '服务状态'},
                { name: '销售人员'}
            ]
        }
    }
    render(){
        return (
            <ul className="table-header">
                {this.state.items.map((item,index) => (
                    <li key={index}>
                        <strong>{item.name}</strong>
                    </li>
                ))}
            </ul>
        );
    }
}

class Tb extends Component {
    render(){
        return (
            <ul>
                <li>
                    <input className="list-input" type="checkbox" />
                    <span className="max-dian">001</span>
                </li>
            </ul>
        );
    }
}

export default class ClientInfo extends Component {
    render() {
        return (
            <div>
                <Top/>
                <Table/>
            </div>
        );
    }

}