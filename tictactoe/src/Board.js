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
            alert(`${spaces[0]} is the winner`)
        } else if (spaces[3] === "x" && spaces[4] === "x" && spaces[5] === "x") {
        // // gameStatus = "won"
            alert("X wins")
        } else if (spaces[6] === "x" && spaces[7] === "x" && spaces[8] === "x") {
            // // gameStatus = "won"
            alert("X wins")
        } else if (spaces[6] === "x" && spaces[7] === "x" && spaces[8] === "x"){
            alert('X Wins')
        } else if (spaces[0] === "x" && spaces[3] === "x" && spaces[6] === "x") {
            alert('X wins')
        } else if (spaces[1] === "x" && spaces[4] === "x" && spaces[7] === "x") {
            alert('X wins')
        } else if (spaces[2] === "x" && spaces[5] === "x" && spaces[8] === "x") {
            alert('X wins')
        } else if (spaces[0] === "x" && spaces[4] === "x" && spaces[8] === "x") {
            alert('X wins')
        } else if (spaces[6] === "x" && spaces[4] === "x" && spaces[2] === "x") {
            alert('X wins')
        } else if (spaces[0] === "o" && spaces[1] === "o" && spaces[2] === "o") {
            alert(`${spaces[0]} is the winner`)
        } else if (spaces[3] === "o" && spaces[4] === "o" && spaces[5] === "o") {
        // // gameStatus = "won"
            alert("O wins")
        } else if (spaces[6] === "o" && spaces[7] === "o" && spaces[8] === "o") {
            // // gameStatus = "won"
            alert("O wins")
        } else if (spaces[6] === "o" && spaces[7] === "o" && spaces[8] === "o"){
            alert('O Wins')
        } else if (spaces[0] === "o" && spaces[3] === "o" && spaces[6] === "o") {
            alert('O wins')
        } else if (spaces[1] === "o" && spaces[4] === "o" && spaces[7] === "o") {
            alert('O wins')
        } else if (spaces[2] === "o" && spaces[5] === "o" && spaces[8] === "o") {
            alert('O wins')
        } else if (spaces[0] === "o" && spaces[4] === "o" && spaces[8] === "o") {
            alert('O wins')
        } else if (spaces[6] === "o" && spaces[4] === "o" && spaces[2] === "o") {
            alert('O wins')
        } else if (counter === 8) {
            alert("draw")
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
