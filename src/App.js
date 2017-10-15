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

  handleKeyDown = (event) => {
    const newBoard = [...this.state.board];
    let row = this.state.row;
    let column = this.state.column;
    // TODO: prevent player from exiting board/going to a negative row or column
    switch (event.key) {
      case 'ArrowUp':
        row--;
        event.preventDefault();
        break;
      case 'ArrowDown':
        row++;
        event.preventDefault();
        break;
      case 'ArrowLeft':
        column--;
        event.preventDefault();
        break;
      case 'ArrowRight':
        column++;
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
