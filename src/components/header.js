import '../css/header.css';
import React, { Component } from 'react';
import { Button } from 'element-react';
import 'element-theme-default';

class Header extends Component {
    
    componentDidMount(){
       
    }
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="logo"></div>
                    <ul className="header-list">
                        <li><a>小米手机</a></li>
                        <li><a>红米</a></li>
                        <li><a>笔记本</a></li>
                        <li><a>电视</a></li>
                        <li><a>盒子</a></li>
                        <li><a>新品</a></li>
                        <li><a>路由器</a></li>
                        <li><a>智能硬件</a></li>
                        <li><a>服务</a></li>
                        <li><a>社区</a></li>
                    </ul>
                    
                    <input type="text" placeholder="小米MIX2   小米Note3新品" className="search"/><Button icon="search"></Button>
                </div>
            </div>
        );
    }
}

export default Header;
