import React, { Component } from 'react';
import Radium from 'radium';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
    this.healthCount = 10;
    this.weaponsCount = 5;

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
      row: 0,
      column: 0,
    };
  }

  componentDidMount() {
    console.log('App mounting...');
    this.createPlayer();
    this.createHealth(this.healthCount);
    this.createWeapons(this.weaponsCount);
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  createPlayer = () => {
    const newState = [...this.state.board];
    const randomRow = Math.floor(Math.random() * this.rows);
    const randomColumn = Math.floor(Math.random() * this.columns);
    console.log(randomRow, randomColumn);

    newState[randomRow][randomColumn] = 2;

    this.setState({
      board: newState,
      row: randomRow,
      column: randomColumn,
    });
  };

  createHealth = (amount) => {
    const newState = [...this.state.board];

    for (let i = 0; i < amount; i++) {
      const randomRow = Math.floor(Math.random() * this.rows);
      const randomColumn = Math.floor(Math.random() * this.columns);
      newState[randomRow][randomColumn] = 3;
    }

    this.setState({
      board: newState,
    });
  }

  createWeapons = (amount) => {
    const newState = [...this.state.board];

    for (let i = 0; i < amount; i++) {
      const randomRow = Math.floor(Math.random() * this.rows);
      const randomColumn = Math.floor(Math.random() * this.columns);
      newState[randomRow][randomColumn] = 4;
    }

    this.setState({
      board: newState,
    });
  }

  handleKeyDown = (event) => {
    const newBoard = [...this.state.board];
    let row = this.state.row;
    let column = this.state.column;
    // TODO: prevent player from exiting board/going to a negative row or column
    switch (event.key) {
      case 'ArrowUp':
        if (row > 0) {
          row--;
        }
        event.preventDefault();
        break;
      case 'ArrowDown':
        if (row < this.rows - 1) {
          row++;
        }
        event.preventDefault();
        break;
      case 'ArrowLeft':
        if (column > 0) {
          column--;
        }
        event.preventDefault();
        break;
      case 'ArrowRight':
        if (column < this.columns - 1) {
          column++;
        }
        event.preventDefault();
        break;
      default:
        return;
    }

    newBoard[this.state.row][this.state.column] = 1;
    newBoard[row][column] = 2;

    this.setState({
      board: newBoard,
      row,
      column,
    });
  }

  render() {
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
