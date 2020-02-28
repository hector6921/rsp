import React, {Component} from 'react';
import Playercard from './Playercard';

class Game extends Component {
  constructor(){
    super();
      this.signs = ["scissors", "rock", "paper"];
      this.state = {
        playerOne: "rock",
        playerTwo: "scissors",
}
  }
  playGame = () => {
    this.setState({
      playerOne: this.signs[Math.floor(Math.random() * 3)],
      playerTwo: this.signs[Math.floor(Math.random() * 3)],
    })

  }
  decideWinner = () => {
    const playerOne = this.state.playerOne
    const playerTwo = this.state.playerTwo

    if (playerOne === playerTwo ){
      return "No winner, it's a tie";
    }
    else if ((playerOne === "rock") && (playerTwo === "scissors") ||
    (playerOne === "scissors") && (playerTwo === "paper") ||
    (playerOne === "paper") && (playerTwo === "rock")){
      return "Player 1 wins !!!";}
      else{
      return "Player 2 wins !!!";}
    }
images = () => {
  switch(this.state.playerOne){
    case "scissors":
  return "https://i.imgur.com/pgjyhIZ.png";
  break;
  case "rock":
  return "https://i.imgur.com/LghSkIw.png";
  break;
  case "paper":
  return "https://i.imgur.com/2gsdqvR.png";
  }
  }

images2 = () => {
  switch(this.state.playerTwo){
    case "scissors":
  return "https://i.imgur.com/pgjyhIZ.png";
  break;
  case "rock":
  return "https://i.imgur.com/LghSkIw.png";
  break;
  case "paper":
  return "https://i.imgur.com/2gsdqvR.png";
}
}

  render(){
    return (
      <div className="container">
      <div>
      <Playercard sign={this.images()} />
      <Playercard sign={this.images2()}/>
      </div>
      <div className="Winner">{this.decideWinner()}</div>
      <button onClick = {this.playGame}>Play the Game</button>
      </div>
    )
  }
}


export default Game;
