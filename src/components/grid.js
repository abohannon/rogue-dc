import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

import Cell from './cell';

const createGridStyles = () => ({
  gridStyle: {
    display: 'flex',
    alignContent: 'flex-start',
    flexFlow: 'row wrap',
    alignSelf: 'center',
    width: 1280,
    margin: '24px',
  },
});

class Grid extends Component {
  static propTypes = {
    rows: PropTypes.number.isRequired,
    columns: PropTypes.number.isRequired,
  }

  render() {
    const {
      rows,
      columns,
    } = this.props;

    const {
      gridStyle,
    } = createGridStyles();

    const grid = [];

    for (let i = 0; i < rows; i++) {
      grid.push([]);
      for (let k = 0; k < columns; k++) {
        grid[i].push(<Cell />);
      }
    }

    return (

      <div style={gridStyle}>{grid}</div>

    );
  }
}

export default Radium(Grid);
