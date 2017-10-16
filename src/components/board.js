import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

import Cell from './cell';

const createGridStyles = () => ({
  rowStyle: {
    display: 'flex',
  },
});

class Grid extends Component {
  static propTypes = {
    boardArray: PropTypes.array.isRequired,
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
    } = this.props;

    const {
      rowStyle,
    } = createGridStyles();

    let cellClass = '';
    const board = boardArray.map(row => (
      <div className="row" style={rowStyle}>
        {
          row.map((item) => {
            if (item === 1) {
              cellClass = 'floor cell';
            } else if (item === 2) {
              cellClass = 'player cell';
            } else if (item === 3) {
              cellClass = 'health cell';
            } else if (item === 4) {
              cellClass = 'weapon cell';
            } else if (item === 5) {
              cellClass = 'enemy cell';
            }
            return <Cell cellClass={cellClass} />;
          })
        }
      </div>
    ));

    return (

      <div>{board}</div>

    );
  }
}

export default Radium(Grid);
