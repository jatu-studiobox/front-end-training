import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import About from './About';
import Jobs from './Jobs';
import Portfolio from './Portfolio';
import Skill from './Skill';
import Home from './Home';
import NotFound404 from './NotFound404';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Switch,Route, Link, NavLink } from 'react-router-dom'

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<BrowserRouter>
                    <div>
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <NavLink exact to="/about" activeClassName="nav-link active" className="nav-link">About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink exact to="/jobs" activeClassName="nav-link active" className="nav-link">Job</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink exact to="/portfolio" activeClassName="nav-link active" className="nav-link">Portfolio</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink exact to="/skill" activeClassName="nav-link active" className="nav-link">Skill</NavLink>
                            </li>
                        </ul>                    
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/jobs" component={Jobs} />
                            <Route exact path="/portfolio" component={Portfolio} />
                            <Route exact path="/skill" component={Skill} />
                            <Route path="*" component={NotFound404} />                      
                        </Switch>
                    </div>
                </BrowserRouter>
                , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
