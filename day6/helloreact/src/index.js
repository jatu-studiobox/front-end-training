import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import RandomBox from './RandomBox';
import RecipeHome from './RecipeHome'
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
// Homework 2 : Random Box
//ReactDOM.render(<RandomBox />, document.getElementById('root'));
// Homework 3 : Recipe Web
ReactDOM.render(<RecipeHome />, document.getElementById('root'));

registerServiceWorker();
