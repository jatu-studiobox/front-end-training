import React, { Component } from 'react';
import RecipeHeader from '../components/RecipeHeader';
import AddRecipeFormContainer from './RecipeAddFormContainer';
import RecipeListContainer from './RecipeListContainer';
import RecipeSearchContainer from './RecipeSearchContainer';
// Start add FontAwesome to React
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// End add FontAwesome to React

class RecipeJob extends Component {
    state = {
        showForm: 'none',
        term: ''
    };

    handleShowForm = () => {
        this.setState({ showForm: true });
    }

    handleHideForm = () => {
        this.setState({ showForm: false });
    }

    handleSearch = (e) => {
        this.setState({ term: e.target.value });
    }

    render() {
        const { term, showForm } = this.state;
        return (
            <React.Fragment>
                <RecipeHeader onShowForm={this.handleShowForm} />
                <div className="container pt-2 pb-2">
                    <div className="row justify-content-center">
                        <div className="col col-lg-1 text-right pr-1 align-self-center"><FontAwesomeIcon icon="search" /> Search :</div>
                        {/* <div className="col-auto align-left pl-0"><input className="form-control form-control-sm" type="text" name="myInput" onChange={this.handleSearch} /></div> */}
                        <div className="col-auto align-left pl-0"><RecipeSearchContainer /></div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <AddRecipeFormContainer showForm={showForm} handleCloseForm={this.handleHideForm} />
                </div>
                <RecipeListContainer />
            </React.Fragment>
        );
    }
}

export default RecipeJob;