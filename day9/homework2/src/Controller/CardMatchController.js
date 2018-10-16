import React, { Component } from 'react';
import CardMatchView from '../View/CardMatchView';

const cardState = {
    hidden: 0,
    show: 1,
    matched: 2
}

class CardMatchController extends Component {
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

    SetTime = (time) => {
        time = time * 1000;
        let hour = Math.floor((time % (1000 * 60 * 60 * 24))/ (1000 * 60 * 60));
        let formatHour = ("0" + hour).slice(-2);
        let min = Math.floor((time % (1000 * 60 * 60))/ (1000 * 60));
        let formatMin = ("0" + min).slice(-2);
        let sec = Math.floor((time % (1000 * 60))/ 1000);
        let formatSec = ("0" + sec).slice(-2);        
        return formatHour + ":" + formatMin + ":" + formatSec;
    }

    render() {
        

        return (
            <CardMatchView cards={this.state.cards} doDeck={this.NewDeck} time={this.SetTime(this.state.playTime)} onFlip={this.flipCard} />
        );
    }
}

export default CardMatchController;