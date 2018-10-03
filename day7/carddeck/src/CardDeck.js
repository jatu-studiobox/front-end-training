import React, { Component } from 'react';
import './CardDeck.css';
import CardNode from './CardNode';
import { Row } from 'antd';
import { Button } from 'antd';

class CardDeck extends Component {
    constructor(props) {
        super(props);
        
        let arrResult = this.GenerateArray();

        this.state = {
            cards : [...arrResult]
        };
    }

    DoShuffle = ([...arr]) => {
        let m = arr.length;
        while (m) {
          const i = Math.floor(Math.random() * m--);
          [arr[m], arr[i]] = [arr[i], arr[m]];
        }
        return arr;
    }

    GenerateArray = () => {
        // Declare all Color
        let arrColor = ['red', 'blue', 'green', 'purple', 'pink'];
        // Declare all double colors before shuffle
        let arrDoubleColor = [...arrColor, ...arrColor];
        // Shuffle all
        arrDoubleColor = this.DoShuffle(arrDoubleColor);
        
        let resultArr = arrDoubleColor.map((color, index) => ({
            id : index, color : color
        }));

        //console.log(resultArr);
        return resultArr;
    }

    // function for EventHandler "new deck"
    NewDeck = () => {
        let arrResult = this.GenerateArray();

        this.setState({
            cards: [...arrResult]
        });
    }

    render() {
        return (
            <React.Fragment>
                <Row type="flex" justify="center" style={{width:650, margin : '0 auto'}}>
                    Card Deck
                </Row>
                <Row type="flex" justify="center" style={{width:650, margin : '0 auto'}}>
                    {this.state.cards.map(card => <CardNode key={card.id} color={card.color} />)}
                </Row>
                <Row type="flex" justify="center" style={{width:650, margin : '0 auto', marginTop : 10}}>
                    <Button type="primary" onClick={this.NewDeck}>Primary</Button>
                </Row>
            </React.Fragment>
        );
    }
}

export default CardDeck;