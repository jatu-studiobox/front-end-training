import React, { Component } from 'react';
import RecipeJobController from '../Controller/RecipeJobController';
import RecipeFooterView from './RecipeFooterView';
// Start add FontAwesome to React
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel,faSearch,faPlusCircle,faHome,faInfoCircle,faComments,faTrashAlt,faTimes,faPlus } from '@fortawesome/free-solid-svg-icons';
library.add([faStroopwafel,faSearch,faPlusCircle,faHome,faInfoCircle,faComments,faTrashAlt,faTimes,faPlus]);
// End add FontAwesome to React

class RecipeHomeView extends Component {
    render() {
        return (
            <React.Fragment>
                <RecipeJobController />
                <RecipeFooterView />
            </React.Fragment>);
    }
}

export default RecipeHomeView;