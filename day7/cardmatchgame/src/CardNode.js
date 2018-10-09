import React, { Component } from 'react';
import { Card } from 'antd';

class CardNode extends Component {
    render() {
        const { card, show, onFlip } = this.props;

        return (
            <Card key={this.props.id}
                style={{ backgroundColor : show ? card.color : 'grey', cursor : 'pointer', width : 120, height : 150, borderRadius : 15}} 
                onClick={() => onFlip(card.id)}>&nbsp;</Card>
        );
    }
}

export default CardNode;