import React, { Component } from 'react';

class RecipeSearch extends Component {
    render() {
        return (<div style={{ textAlign : 'center', fontSize : 12, padding : 3 }}>
                Search : <input type='text'/>
                </div>
        );
    }
}

export default RecipeSearch;