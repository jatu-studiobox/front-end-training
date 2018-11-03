import React from 'react';

const RecipeSearch = ({ onChange }) => (
    <input className="form-control form-control-sm" 
        type="text"
        name="myInput"
        onChange={onChange} />
);

export default RecipeSearch;