import React, {Component} from 'react';
import Board from './Board.js';
import './App.css';
class Square extends Component{
    constructor(props){
        super(props)
    }
    handleClick = () => {
    let { index } = this.props
    this.props.handleClick(index)
}
    render(){
        let{value} = this.props
        return(
            <div >
                <button id ="mainSquares" onClick = {this.handleClick} >{value}</button>
            </div>
        )
    }
}
export default Square;
