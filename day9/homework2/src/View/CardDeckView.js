import React, { Component } from 'react';
import CardNodeView from './CardNodeView';

class CardDeckView extends Component {
    render() {
        // Destruction from props
        const { cards, doDeck, doAlert } = this.props;

        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <h3>Card Deck</h3>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-8">
                        <div className="d-flex flex-wrap justify-content-center">
                            {cards.map(card => <CardNodeView key={card.id} color={card.color} doAlert={doAlert} />)}
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <button type="button" className="btn btn-warning" onClick={doDeck}>New Deck</button>
                </div>
            </div>
        );
    }
}

export default CardDeckView;