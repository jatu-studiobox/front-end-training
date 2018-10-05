import React, { Component } from 'react';
// Start add FontAwesome to React
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// End add FontAwesome to React

class RecipeBox extends Component {
    handleDelete = (e) => {
        this.props.deleteRecipe(this.props.id)
    }
    render() {
        const { ingredients } = this.props;
        const ingredientlist = ingredients.map(i => <li>{i}</li>);
        
        return (<div key={this.props.id} className="col-lg-4 col-md-4 col-sm-4 col-xs-4 p-1">
                    <div className="card h-100 d-inline-block" style={{fontSize : 12, width : 371}} >
                        <img className="card-img-top" src={this.props.pic} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">
                                {this.props.title}
                            </h5>
                            <p style={{ fontWeight : 'bold'}}>Ingredients:</p>
                            <ul>
                                {ingredientlist}
                            </ul>
                            <p style={{ fontWeight : 'bold'}}>Instructions:</p>
                            <p className="card-text">{this.props.instructions}</p>
                            <div style={{ textAlign : 'right'}}>
                                <button className="btn btn-sm btn-teal text-white" onClick={this.handleDelete}><FontAwesomeIcon icon="trash-alt" /> Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default RecipeBox;