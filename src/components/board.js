import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

import Cell from './cell';

const createGridStyles = props => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boardStyle: {
    backgroundColor: 'white',
  },
  rowStyle: {
    display: 'flex',
  },
  gameOver: {
    fontSize: 90,
    fontWeight: 900,
    color: 'red',
    position: 'absolute',
    textShadow: '2px 2px rgba(0, 0, 0, 0.8)',
    display: props.playerHealth <= 0 ? '' : 'none',
  },
});

class Grid extends Component {
  static propTypes = {
    boardArray: PropTypes.array.isRequired,
    playerRow: PropTypes.number.isRequired,
    playerColumn: PropTypes.number.isRequired,
    fogToggle: PropTypes.bool.isRequired,
  }

  render() {
    const {
      boardArray,
      playerRow,
      playerColumn,
      fogToggle,
    } = this.props;

    const {
      boardStyle,
      rowStyle,
      container,
      gameOver,
    } = createGridStyles(this.props);

    const board = boardArray.map((row, i) => (
      <div className="row" style={rowStyle} index={i}>
        {
          row.map((item, j) => {
            const itemClasses = ['wall', 'floor', 'player', 'health', 'weapon', 'enemy'];
            const cellClass = itemClasses[item];
            return 0,
            <Cell
                cellClass={cellClass}
                position={[i, j]}
                playerRow={playerRow}
                playerColumn={playerColumn}
                fogToggle={fogToggle}
              />;
          })
        }
      </div>
    ));
    return (
      <div style={container}>
        <div style={gameOver}>GAME OVER</div>
        <div style={boardStyle}>{board}</div>
      </div>

    );
  }
}

export default Radium(Grid);
