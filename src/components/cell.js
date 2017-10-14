import React, { Component } from 'react';
import Radium from 'radium';
import '../App.css';

const createCellStyles = () => ({
  cell: {
    height: '15px',
    width: '15px',
    border: '1px solid rgba(0, 0, 0, 0.5)',
    outline: 'none',
  },
});

class Cell extends Component {
  render() {
    const {
      cell,
    } = createCellStyles();

    return (
      <div className={this.props.cellClass} style={cell} />
    );
  }
}

export default Radium(Cell);
