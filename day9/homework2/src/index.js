import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import HomeController from './Controller/HomeController';
// import CardDeckController from './Controller/CardDeckController';
// import RecipeHomeController from './Controller/RecipeHomeController';
// import CardMatchController from './Controller/CardMatchController';
// import BitCoinTrackerController from './Controller/BitCoinTrackerController';
// import RegisterUserController from './Controller/RegisterUserController';
// import NotFound404 from './View/NotFound404';
import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.css';
// import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<BrowserRouter>
//     <div>
//         <ul className="nav nav-tabs">
//             <li className="nav-item">
//                 <NavLink exact to="/day7_1" activeClassName="nav-link active" className="nav-link">Day 7 #1</NavLink>
//             </li>
//             <li className="nav-item">
//                 <NavLink exact to="/day7_2" activeClassName="nav-link active" className="nav-link">Day 7 #2</NavLink>
//             </li>
//             <li className="nav-item">
//                 <NavLink exact to="/day7_3" activeClassName="nav-link active" className="nav-link">Day 7 #3</NavLink>
//             </li>
//             <li className="nav-item">
//                 <NavLink exact to="/Day8_1/USD" activeClassName="nav-link active" className="nav-link" onClick={this.handleClick}>Day 8 #1 USD</NavLink>
//             </li>
//             <li className="nav-item">
//                 <NavLink exact to="/Day8_1/GBP" activeClassName="nav-link active" className="nav-link">Day 8 #1 GBP</NavLink>
//             </li>
//             <li className="nav-item">
//                 <NavLink exact to="/Day8_1/EUR" activeClassName="nav-link active" className="nav-link">Day 8 #1 EUR</NavLink>
//             </li>
//             <li className="nav-item">
//                 <NavLink exact to="/Day8_3" activeClassName="nav-link active" className="nav-link">Day 8 #3</NavLink>
//             </li>
//         </ul>
//         <Switch>
//             <Route exact path="/" component={HomeController} />
//             <Route exact path="/day7_1" component={CardDeckController} />
//             <Route exact path="/day7_2" component={RecipeHomeController} />
//             <Route exact path="/day7_3" component={CardMatchController} />
//             <Route exact path="/Day8_1/:cur" component={BitCoinTrackerController} />
//             <Route exact path="/day8_3" component={RegisterUserController} />
//             <Route path="*" component={NotFound404} />
//         </Switch>
//     </div>
// </BrowserRouter>
//     , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
