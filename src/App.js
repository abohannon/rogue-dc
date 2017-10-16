import React, { Component } from 'react';
import Radium from 'radium';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

import Board from './components/board';
import Stats from './components/stats';
import Feed from './components/feed';

const createAppStyles = () => ({
  appWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 24,
  },
  topContainer: {
    display: 'flex',
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.rows = 30;
    this.columns = 50;
    this.healthCount = 10;
    this.weaponsCount = 5;
    this.enemyCount = 12;

    const boardArray = [];
    for (let i = 0; i < this.rows; i++) {
      boardArray.push([]);
      for (let j = 0; j < this.columns; j++) {
        boardArray[i].push(1);
      }
    }

    this.state = {
      board: boardArray,
      level: 1,
      xp: 0,
      health: 100,
      attack: 1,
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
    this.createEnemies(this.enemyCount);
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

  // TODO: Combine element creation into one function?
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

  createEnemies = (amount) => {
    const newState = [...this.state.board];

    for (let i = 0; i < amount; i++) {
      const randomRow = Math.floor(Math.random() * this.rows);
      const randomColumn = Math.floor(Math.random() * this.columns);
      newState[randomRow][randomColumn] = 5;
    }

    this.setState({
      board: newState,
    });
  }

  // TODO: Rename this function to something more descriptive
  handleKeyDown = (event) => {
    const newBoard = [...this.state.board];
    let row = this.state.row;
    let column = this.state.column;
    let newHealth = this.state.health;
    let newWeapon = this.state.attack;
    const randomNum = Math.floor(Math.random() * 6) + 5;

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

    switch (this.state.board[row][column]) {
      case 3:
        newHealth += randomNum;
        console.log(`You picked up health +${randomNum}`);
        break;
      case 4:
        newWeapon += 1;
        break;
      // no default
    }

    newBoard[this.state.row][this.state.column] = 1;
    newBoard[row][column] = 2;

    this.setState({
      board: newBoard,
      row,
      column,
      health: newHealth,
      attack: newWeapon,
    });
  }

  render() {
    const {
      appWrapper,
      topContainer,
    } = createAppStyles();

    return (
      <MuiThemeProvider>
        <div className="App" style={appWrapper}>
          <div style={topContainer}>
            <Board
              boardArray={this.state.board}
            />
            <Feed />
          </div>
          <Stats state={this.state} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Radium(App);
