import React, { Component } from 'react';

class CardMatchNodeView extends Component {
    render() {
        const { card, show, onFlip } = this.props;

        return (
            <div key={this.props.id} 
                className="card"
                style={{ backgroundColor: show ? card.color : 'grey', cursor : 'pointer', margin: 5, width : 120, height : 150 }}
                onClick={() => onFlip(card.id)}>
                <div className="card-body">&nbsp;</div>
            </div>
        );
    }
}

export default CardMatchNodeView;