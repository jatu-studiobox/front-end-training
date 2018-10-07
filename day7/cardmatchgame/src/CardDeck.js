import React, { Component } from 'react';
import CardNode from './CardNode';
import { Row } from 'antd';
import { Button } from 'antd';
import Clock from './Clock';

const cardState = {
    hidden: 0,
    show: 1,
    matched: 2
}

class CardDeck extends Component {
    constructor(props) {
        super(props);
        
        let arrResult = this.GenerateArray();

        this.state = {
            cards : [...arrResult],
            notClick: false,
            playTime: 0,
            firstClick : 0
        };
    }

    componentDidMount() {
        //this.timerID = setInterval(() => this.tick(), 1000);
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
            id : index, 
            color : color,
            state: cardState.hidden
        }));

        //console.log(resultArr);
        return resultArr;
    }

    // function for EventHandler "new deck"
    NewDeck = () => {
        let arrResult = this.GenerateArray();

        this.setState({
            cards: [...arrResult],
            notClick: false,
            playTime: 0,
            firstClick : 0
        });

        // Clear Clock
        clearInterval(this.timerID);
        //this.timerID = setInterval(() => this.tick(), 1000);
    }

    tick = () => {
        this.setState({ playTime: this.state.playTime + 1 });
    }

    flipCard = (id) => {
        //alert(idx);

        let first = this.state.firstClick;
        if (first == 0) {
            first = 1;
            this.timerID = setInterval(() => this.tick(), 1000);
        }

        const selectedCard = this.state.cards.find(c => c.id === id);

        if (this.state.notClick || selectedCard.state !== cardState.hidden)
            return;

        let cards = this.changeState(this.state.cards, [id], cardState.show);

        let showedCards = cards.filter((c) => c.state === cardState.show);

        const ids = showedCards.map(c => c.id);

        if ((showedCards.length === 2) && (showedCards[0].color === showedCards[1].color)) {
            cards = this.changeState(cards, ids, cardState.matched);
        }
        else if (showedCards.length === 2) {
            this.setState({ cards, notClick: false });

            let hiddenCards = this.changeState(cards, ids, cardState.hidden);
            
            this.setState({ hiddenCards, notClick: true }, () => {
                setTimeout(() => {
                    this.setState({ cards: hiddenCards, notClick: false }); //ปิดการ์ดและอนุญาตให้คลิกเล่นต่อ
                }, 500);
            });
            return;
        }
        
        //console.log(cards);
        this.setState({ cards, notClick: false, firstClick : first });

        let matchedCards = cards.filter((c) => c.state === cardState.matched);
        if (matchedCards.length === 10) {
            clearInterval(this.timerID);
            alert ('Mission Accomplished !!');
        }
    }

    changeState = (cards, id, newState) => {
        return cards.map(c => (
            id.includes(c.id) ? { ...c, state: newState } : c
        ));
    }

    render() {
        return (
            <React.Fragment>
                <Row type="flex" justify="center" style={{width:650, margin : '0 auto'}}>
                    Card Deck
                </Row>
                <Row type="flex" justify="center" style={{width:650, margin : '0 auto'}}>
                    {this.state.cards.map(card => <CardNode key={card.id} show={card.state !== cardState.hidden} card={card} onFlip={this.flipCard} />)}
                </Row>
                <Row type="flex" justify="center" style={{width:650, margin : '0 auto', marginTop : 10}}>
                    <Button onClick={this.NewDeck}>New Deck</Button>
                </Row>
                <Row type="flex" justify="center" style={{width:650, margin : '0 auto', marginTop : 10}}>
                    <div><Clock time={this.state.playTime} /></div>
                </Row>
            </React.Fragment>
        );
    }
}

export default CardDeck;