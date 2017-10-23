import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

import Cell from './cell';

const createGridStyles = () => ({
  boardStyle: {
    backgroundColor: 'white',
  },
  rowStyle: {
    display: 'flex',
  },
});

class Grid extends Component {
  static propTypes = {
    boardArray: PropTypes.array.isRequired,
    playerRow: PropTypes.number.isRequired,
    playerColumn: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      myState: null,
    };
  }

  render() {
    const {
      boardArray,
      playerRow,
      playerColumn,
    } = this.props;

    const {
      boardStyle,
      rowStyle,
    } = createGridStyles();

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
              />;
          })
        }
      </div>
    ));
    return (
      <div style={boardStyle}>{board}</div>
    );
  }
}

export default Radium(Grid);
