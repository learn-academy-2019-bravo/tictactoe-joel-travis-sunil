import React, {Component} from 'react';
import Square from './Square.js';
class Board extends Component {
    constructor(props){
        super(props)
            this.state = {
                spaces: [" "," "," "," "," "," "," "," "," "],
                gameStatus: 'inProgress',
                counter: 0
            }
    }
    startGame = () => {
        this.setState({
            spaces: [" "," "," "," "," "," "," "," "," "],
            gameStatus: 'inProgress',
            counter: 0
        })
    }
    handleClick = (spacesIndex) => {
        let {gameStatus, counter, spaces} = this.state

        //game continue condition

        if (counter === 0 && spaces[spacesIndex] === " ") {
            counter = counter+1
            spaces[spacesIndex] = "x"

        } else if (counter % 2 !== 0 && spaces[spacesIndex] !== "x" &&  spaces[spacesIndex] !== "o" ) {
            counter = counter +1
            spaces[spacesIndex] = "o"
            console.log(spaces);
        } else if (counter % 2 === 0 && spaces[spacesIndex] !== "x" &&  spaces[spacesIndex] !== "o" ) {
            counter = counter + 1
            spaces[spacesIndex] = "x"
            console.log(spaces)
        }
        this.setState({spaces, counter, gameStatus})
        this.winning()
    }

    winning = (spacesIndex)=> {
        let {gameStatus, counter, spaces} = this.state
        if (spaces[0] === "x" && spaces[1] === "x" && spaces[2] === "x") {

            setTimeout(function(){ alert("X Wins");}, 100)
        } else if (spaces[3] === "x" && spaces[4] === "x" && spaces[5] === "x") {
        // // gameStatus = "won"
            setTimeout(function(){ alert("X Wins");}, 100)
        } else if (spaces[6] === "x" && spaces[7] === "x" && spaces[8] === "x") {
            // // gameStatus = "won"
            setTimeout(function(){ alert("X Wins");}, 100)
        } else if (spaces[6] === "x" && spaces[7] === "x" && spaces[8] === "x"){
            setTimeout(function(){ alert("X Wins");}, 100)
        } else if (spaces[0] === "x" && spaces[3] === "x" && spaces[6] === "x") {
            setTimeout(function(){ alert("X Wins");}, 100)
        } else if (spaces[1] === "x" && spaces[4] === "x" && spaces[7] === "x") {
            setTimeout(function(){ alert("X Wins");}, 100)
        } else if (spaces[2] === "x" && spaces[5] === "x" && spaces[8] === "x") {
            setTimeout(function(){ alert("X Wins");}, 100)
        } else if (spaces[0] === "x" && spaces[4] === "x" && spaces[8] === "x") {
            setTimeout(function(){ alert("X Wins");}, 100)
        } else if (spaces[6] === "x" && spaces[4] === "x" && spaces[2] === "x") {
            setTimeout(function(){ alert("X Wins");}, 100)
        } else if (spaces[0] === "o" && spaces[1] === "o" && spaces[2] === "o") {
            setTimeout(function(){ alert("O Wins");}, 100)
        } else if (spaces[3] === "o" && spaces[4] === "o" && spaces[5] === "o") {
        // // gameStatus = "won"
            setTimeout(function(){ alert("O Wins");}, 100)
        } else if (spaces[6] === "o" && spaces[7] === "o" && spaces[8] === "o") {
            // // gameStatus = "won"
            setTimeout(function(){ alert("O Wins");}, 100)
        } else if (spaces[6] === "o" && spaces[7] === "o" && spaces[8] === "o"){
            setTimeout(function(){ alert("O Wins");}, 100)
        } else if (spaces[0] === "o" && spaces[3] === "o" && spaces[6] === "o") {
            setTimeout(function(){ alert("O Wins");}, 100)
        } else if (spaces[1] === "o" && spaces[4] === "o" && spaces[7] === "o") {
            setTimeout(function(){ alert("O Wins");}, 100)
        } else if (spaces[2] === "o" && spaces[5] === "o" && spaces[8] === "o") {
            setTimeout(function(){ alert("O Wins");}, 100)
        } else if (spaces[0] === "o" && spaces[4] === "o" && spaces[8] === "o") {
            setTimeout(function(){ alert("O Wins");}, 100)
        } else if (spaces[6] === "o" && spaces[4] === "o" && spaces[2] === "o") {
            setTimeout(function(){ alert("O Wins");}, 100)
        } else if (counter === 8) {
            setTimeout(function(){ alert("No Winners for now");}, 100)
        }
    }

    render(){
        let {spaces, gameStatus}= this.state
        let newSpaces=spaces.map((value, index) => {
            return (
                <Square
            value = {value}
            index = {index}
            key = {index}
            handleClick = {this.handleClick}
            winning = {this.winning}
            />
            )
        })
        return (
        <div>
            <h1>Tac Tac Toe</h1>
            <button id = "reset" onClick = {this.startGame}>Play Tic Tac Toe</button>
          <div id = "mainBoard">{newSpaces}
              <div> {gameStatus === 'won' &&
                  <h2>You won</h2>
             }</div>
          </div>
          <div>

          </div>
        </div>
        );
    }
}
export default Board;
