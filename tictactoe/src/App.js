import React, {Component} from 'react';
import Board from './Board';
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
    }
    render(){
  return (
    <div className="App">
      <Board />
    </div>
  );
    }

}
export default App;
