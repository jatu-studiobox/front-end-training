import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<React.Fragment>
    <div style={{ textAlign: 'center' }}>Simple React Snake Game (Add more ability)</div>
    <App sizes={500} />
    <div style={{ textAlign: 'center' }}>Credit : Simple React Snake Game (A PEN BY Alex)</div>
    <div style={{ textAlign: 'center' }}>
        <a href='https://goo.gl/ZySpf3'>Simple React Snake Game</a>
    </div>
</React.Fragment>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
