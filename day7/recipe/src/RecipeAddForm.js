import React, { Component } from 'react';
// Start add FontAwesome to React
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// End add FontAwesome to React

class RecipeAddForm extends Component {
    state = {
        img: '',
        title: '',
        instructions: '',
        ingredients: ['']
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleAddIng = (e) => {
        this.setState({ ingredients: [...this.state.ingredients, ''] });
    }

    handleIngChange = (e) => {
        const index = Number(e.target.name.split('-')[1]);
        this.setState({
            ingredients: this.state.ingredients.map((ing, i) => (
                i === index
                    ? e.target.value
                    : ing
            ))
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState(
            {
                img: '',
                title: '',
                instructions: '',
                ingredients: ['']
            }
        );
    }

    render() {
        const { title, img, instructions, ingredients } = this.state;

        const ingInput = ingredients.map((ing, i) => (
            <input className="form-control form-control-sm" key={i} type="text" name={`ingredient-${i}`} value={ingredients[i]} onChange={this.handleIngChange} />
        ));

        return (<div className="container mb-3" style={{ display: this.props.showForm }}>
                    <div className="card">
                        <div className="card-header text-white" style={{backgroundColor : 'teal'}}>
                            <div className="row">
                                <div className="col-md-11">
                                    Add new recipe
                                </div>
                                <div className="col-md-1 text-right">
                                    <FontAwesomeIcon icon="times" style={{cursor : 'pointer'}} onClick={this.props.handleCloseForm} />
                                </div>
                            </div>
                        </div>
                        <div className="card-body pt-0">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label className="p-1" for="title">Title:</label>
                                    <input className="form-control form-control-sm" type="text" name="title" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label className="p-1" for="instructions">Instruction:</label>
                                    <input className="form-control form-control-sm" type="text" name="instructions" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label className="p-1">Ingredients:</label>
                                    {ingInput}
                                </div>
                                <div className="text-right">
                                    <button type="button" className="btn btn-sm bg-teal text-white" onClick={this.handleAddIng}><FontAwesomeIcon icon="plus" /></button>
                                </div>
                                <div className="form-group">
                                    <label className="p-1" for="img">Image:</label>
                                    <input className="form-control form-control-sm" type="text" name="img" onChange={this.handleChange} />
                                </div>
                                <div className="form-group text-center">
                                    <button type="submit" className="btn btn-sm bg-teal text-white"><FontAwesomeIcon icon="plus-circle" /> Add Recipe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        );
    }
}

export default RecipeAddForm;