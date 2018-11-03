import React from 'react';
// Start add FontAwesome to React
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// End add FontAwesome to React

const RecipeBox = (props) => {
    const { id, title, pic, instructions, deleteRecipe } = props;
    const ingredients = props.ingredients.map((ing, i) => (
        <li key={i}>{ing}</li>
    ));
    return (<div key={id} className="col-lg-4 col-md-4 col-sm-4 col-xs-4 p-1">
        <div className="card h-100 d-inline-block" style={{ fontSize: 12, width: 371 }} >
            <img className="card-img-top" src={pic} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">
                    {title}
                </h5>
                <p style={{ fontWeight: 'bold' }}>Ingredients:</p>
                <ul>
                    {ingredients}
                </ul>
                <p style={{ fontWeight: 'bold' }}>Instructions:</p>
                <p className="card-text">{instructions}</p>
                <div style={{ textAlign: 'right' }}>
                    <button className="btn btn-sm btn-teal text-white" onClick={() => deleteRecipe(id)}><FontAwesomeIcon icon="trash-alt" /> Delete</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default RecipeBox;
