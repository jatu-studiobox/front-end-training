import React from 'react';
import './App.css';
import HeaderContainer from '../containers/HeaderContainer';
import Home from './Home';
import MyCartContainter from '../containers/MyCartContainter';
import { Switch, Route } from 'react-router-dom';
// Start add FontAwesome to React
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faSearch, faPlusCircle, faHome, faInfoCircle, faComments, faTrashAlt, faTimes, faPlus, faShoppingCart, faCartPlus } from '@fortawesome/free-solid-svg-icons';
library.add([faStroopwafel, faSearch, faPlusCircle, faHome, faInfoCircle, faComments, faTrashAlt, faTimes, faPlus, faShoppingCart, faCartPlus]);
// End add FontAwesome to React

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/my-cart' component={MyCartContainter} />
      </Switch>
    </div>
  );
}

export default App;
