import React, { Component } from 'react';

class CardNodeView extends Component {
    render() {
        return (
            <div key={this.props.id} 
                className="card"
                style={{ backgroundColor: this.props.color, margin: 5, width : 120, height : 150 }}
                onClick={() => this.props.doAlert(this.props.color)}>
                <div className="card-body">&nbsp;</div>
            </div>
        );
    }
}

export default CardNodeView;