import React, { Component } from 'react';
import RecipeJob from './RecipeJob';
import RecipeFooter from './RecipeFooter';

// Start add FontAwesome to React
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel,faSearch,faPlusCircle,faHome,faInfoCircle,faComments,faTrashAlt,faTimes,faPlus } from '@fortawesome/free-solid-svg-icons';
library.add([faStroopwafel,faSearch,faPlusCircle,faHome,faInfoCircle,faComments,faTrashAlt,faTimes,faPlus]);
// End add FontAwesome to React

class RecipeHome extends Component {
    render() {
        return (
            <React.Fragment>
            <RecipeJob />
            <RecipeFooter />
            </React.Fragment>);
    }
}

export default RecipeHome;