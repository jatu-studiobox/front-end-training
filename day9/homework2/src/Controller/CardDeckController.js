import React, { Component } from 'react';
import CardDeckView from '../View/CardDeckView'

class CardDeckController extends Component {
  constructor(props) {
    super(props);

    let arrResult = this.GenerateArray();

    this.state = {
      cards: [...arrResult]
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
      id: index, color: color
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

  // function for EventHandler "Display Color on Card"
  showAlert = (valueColor) => {
    alert('Color is ' + valueColor);
  }

  render() {
    return (
      <CardDeckView cards={this.state.cards} doDeck={this.NewDeck} doAlert={this.showAlert} />
    );
  }
}

export default CardDeckController;