import React, { Component } from 'react';
import CardMatchNodeView from './CardMatchNodeView';

const cardState = {
    hidden: 0,
    show: 1,
    matched: 2
}

class CardMatchView extends Component {
    render() {
        // Destruction from props
        const { cards, doDeck, time, onFlip } = this.props;

        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <h3>Card Matching Game</h3>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-8">
                        <div className="d-flex flex-wrap justify-content-center">
                            {cards.map(card => <CardMatchNodeView key={card.id} show={card.state !== cardState.hidden} card={card} onFlip={onFlip} />)}
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <button type="button" className="btn btn-warning" onClick={doDeck}>New Deck</button>
                </div>
                <div className="row justify-content-md-center">
                    <div style={{color:'blue',fontWeight:'bold'}}>Play Time [{time}]</div>
                </div>
            </div>
        );
    }
}

export default CardMatchView;