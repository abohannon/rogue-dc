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
    flexDirection: 'row',
    marginTop: 24,
    justifyContent: 'center',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.rows = 30;
    this.columns = 50;
    this.healthCount = 10;
    this.weaponsCount = 5;
    this.enemyCount = 15;

    this.createBoard = () => {
      const boardArray = [];
      for (let i = 0; i < this.rows; i++) {
        boardArray.push([]);
        for (let j = 0; j < this.columns; j++) {
          if (
            Math.random() > 0.78) {
            boardArray[i].push(0);
          } else {
            boardArray[i].push(1);
          }
        }
      }
      return boardArray;
    };

    this.state = {
      board: this.createBoard(),
      level: 1,
      xp: 0,
      health: 100,
      attack: 1,
      row: 0,
      column: 0,
      enemyHP: 5,
      fog: true,
      feed: [],
    };
  }

  componentDidMount() {
    this.createElements();
    document.addEventListener('keydown', this.handleMove);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleMove);
  }

  toggleFog = () => {
    this.setState({
      fog: !this.state.fog,
    });
  }

  updateFeed = (updatedFeed) => {
    this.setState({
      feed: updatedFeed,
    });
  }

  resetBoard = () => {
    const newBoard = this.createBoard();
    this.setState({
      board: newBoard,
      level: 1,
      xp: 0,
      health: 100,
      attack: 1,
      nextLevel: 20,
      row: 0,
      column: 0,
      enemyHP: 5,
      fog: true,
      feed: [],
    }, this.createElements);
    document.addEventListener('keydown', this.handleMove);
  }

  createPlayer = () => {
    const boardCopy = [...this.state.board];
    const randomRow = Math.floor(Math.random() * this.rows);
    const randomColumn = Math.floor(Math.random() * this.columns);

    boardCopy[randomRow][randomColumn] = 2;

    this.setState({
      board: boardCopy,
      row: randomRow,
      column: randomColumn,
    });
  };

  createHealth = (amount) => {
    const boardCopy = [...this.state.board];

    for (let i = 0; i < amount; i++) {
      const randomRow = Math.floor(Math.random() * this.rows);
      const randomColumn = Math.floor(Math.random() * this.columns);
      boardCopy[randomRow][randomColumn] = 3;
    }

    this.setState({
      board: boardCopy,
    });
  }

  createWeapons = (amount) => {
    const boardCopy = [...this.state.board];

    for (let i = 0; i < amount; i++) {
      const randomRow = Math.floor(Math.random() * this.rows);
      const randomColumn = Math.floor(Math.random() * this.columns);
      boardCopy[randomRow][randomColumn] = 4;
    }

    this.setState({
      board: boardCopy,
    });
  }

  createEnemies = (amount) => {
    const boardCopy = [...this.state.board];

    for (let i = 0; i < amount; i++) {
      const randomRow = Math.floor(Math.random() * this.rows);
      const randomColumn = Math.floor(Math.random() * this.columns);
      boardCopy[randomRow][randomColumn] = 5;
    }

    this.setState({
      board: boardCopy,
    });
  }

  createElements = () => {
    this.createPlayer();
    this.createHealth(this.healthCount);
    this.createWeapons(this.weaponsCount);
    this.createEnemies(this.enemyCount);
  }

  gameOver = () => {
    document.removeEventListener('keydown', this.handleMove);
    return true;
  }

  handleMove = (event) => {
    const board = [...this.state.board];
    let row = this.state.row;
    let column = this.state.column;
    let health = this.state.health;
    let attack = this.state.attack;
    let enemyHP = this.state.enemyHP;
    let xp = this.state.xp;

    // setup basic keyboard movement
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
      case 0: // wall
        row = this.state.row;
        column = this.state.column;
        break;
      case 3: // picked up health
        health += Math.floor(Math.random() * 6) + 5;
        break;
      case 4: // picked up a weapon
        attack += 1;
        break;
      case 5: // encountered an enemy
        if (enemyHP > 0) {
          row = this.state.row;
          column = this.state.column;
          enemyHP -= Math.floor(Math.random() * (5 - attack)) + attack;
          health -= Math.floor(Math.random() * 5) + 2;
        } else {
          enemyHP = enemyHP + Math.abs(enemyHP) + Math.floor(Math.random() * 10) + 5;
          /* if enemyHP is negative, bring it back to zero then
          add random number between 5-15 */
          xp += Math.floor(Math.random() * (35 - 10)) + 10;
        }
        break;
      // no default
    }

    /* update copy of board array with new player position and change
    previous player position to a floor class (to avoid snake effect) */
    board[this.state.row][this.state.column] = 1;
    board[row][column] = 2;

    // level up
    if (xp >= 100) {
      this.setState({
        level: this.state.level + 1,
        xp: 0,
      });
    } else {
      this.setState({
        xp,
      });
    }

    // game over
    if (health <= 0) {
      this.gameOver();
    }

    this.setState({
      board,
      row,
      column,
      health,
      attack,
      enemyHP,
    });
  }

  render() {
    const {
      appWrapper,
      mainContainer,
    } = createAppStyles();

    return (
      <MuiThemeProvider>
        <div className="App" style={appWrapper}>
          <div style={mainContainer}>
            <Board
              boardArray={this.state.board}
              playerRow={this.state.row}
              playerColumn={this.state.column}
              fogToggle={this.state.fog}
              gameOver={this.gameOver}
              playerHealth={this.state.health}
            />
            <Stats {...this.state} toggleFog={this.toggleFog} reset={this.resetBoard} />
          </div>
          <Feed {...this.state} updateFeed={this.updateFeed} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Radium(App);
