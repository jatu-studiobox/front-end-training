import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound404 from './NotFound404';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter,Switch,Route, Link, NavLink } from 'react-router-dom'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

//ReactDOM.render(<App />, document.getElementById('root'));
/* Example Componet NavLink */
ReactDOM.render(<BrowserRouter>
    <div>
    <Layout>
        <Header className="header">
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1"><NavLink to="/">App</NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink to="/Home">Home</NavLink></Menu.Item>
                <Menu.Item key="3"><NavLink to="/about">About</NavLink></Menu.Item>
                <Menu.Item key="4"><NavLink to="/Contact">Contact</NavLink></Menu.Item>
                <Menu.Item key="5"><NavLink to="/about/jatuphum">Users</NavLink></Menu.Item>
            </Menu>
        </Header>
    </Layout>
    <Switch>
        <Route path="/" component={App} />
        <Route path="/Home" component={Home} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Contact/Jatuphum" render={() => (<h3>Jatuphum</h3>)} />
        <Route path="/About/:name" component={About} />
        <Route path="*" component={NotFound404} />                      
    </Switch>
    </div>
</BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
