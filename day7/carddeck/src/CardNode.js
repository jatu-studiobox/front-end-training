import React, { Component } from 'react';
import './CardNode.css';
import { Card } from 'antd';

class CardNode extends Component {
    showAlert = (valueColor) => {
        alert('Color is ' + valueColor);
    }
    render() {
        return (
            <Card key={this.props.id}
                style={{ backgroundColor: this.props.color, height : 150, width : 120}} 
                onClick={() => this.showAlert(this.props.color)}
            >&nbsp;</Card>
        );
    }
}

export default CardNode;