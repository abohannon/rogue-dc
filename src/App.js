import React, { Component } from 'react';
import Radium from 'radium';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import './App.css';

import Board from './components/board';
import Stats from './components/stats';

const createAppStyles = () => ({
  appWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 24,
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.rows = 30;
    this.columns = 50;

    const boardArray = [];
    for (let i = 0; i < this.rows; i++) {
      boardArray.push([]);
      for (let j = 0; j < this.columns; j++) {
        boardArray[i].push(1);
      }
    }

    this.state = {
      board: boardArray,
      level: 2,
      xp: 0,
      health: 50,
      attack: 0,
      nextLevel: 0,
    };
  }

  componentDidMount() {
    this.createPlayer();
  }

  createPlayer = () => {
    const newState = [...this.state.board];
    newState[Math.floor(Math.random() * this.rows)][Math.floor(Math.random() * this.columns)] = 2;
    this.setState({
      board: newState,
    });
  };


  render() {
    document.addEventListener('keydown', (event) => {
      console.log(event);
    });

    const {
      appWrapper,
    } = createAppStyles();

    return (
      <MuiThemeProvider>
        <div className="App" style={appWrapper}>
          <Board
            boardArray={this.state.board}
          />
          <Stats state={this.state} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Radium(App);
