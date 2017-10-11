import React, { Component } from 'react';
import Radium from 'radium';

const createCellStyles = () => ({
  cell: {
    height: '10px',
    width: '10px',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    outline: 'none',
    float: 'left',
  },
});

class Cell extends Component {
  render() {
    const {
      cell,
    } = createCellStyles();

    return (
      <div style={cell} />
    );
  }
}

export default Radium(Cell);
