import React, { Component } from 'react';
import './RandomBox.css';

class RandomBox extends Component {
    render() {
        // Random Background Color
        let colors = ['red', 'blue', 'green', 'purple', 'pink'];
        let bgcolor = colors[Math.floor(Math.random()*colors.length)];

        // random font size
        let min = 20;
        let max = 40;
        let fsize = Math.floor(Math.random() * (max - min + 1)) + min;

        return (
            <React.Fragment>
                <br />
                <div className="parant-box">
                    <div className="child-box" style={{backgroundColor : bgcolor, fontSize : fsize}}>Random BG Color and Text Size</div>
                </div>
            </React.Fragment>
        );
    }
}

export default RandomBox;