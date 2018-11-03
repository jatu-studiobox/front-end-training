import React from 'react';
import './App.css';
import RecipeJobContainer from '../containers/RecipeJobContainer';
import RecipeFooter from './RecipeFooter'
// Start add FontAwesome to React
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faSearch, faPlusCircle, faHome, faInfoCircle, faComments, faTrashAlt, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
library.add([faStroopwafel, faSearch, faPlusCircle, faHome, faInfoCircle, faComments, faTrashAlt, faTimes, faPlus]);
// End add FontAwesome to React

const App = () => {
  return (
    <React.Fragment>
      <RecipeJobContainer />
      <RecipeFooter />
    </React.Fragment>
  );
}

export default App;
