import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import '../App.css';

const createCellStyles = () => ({
  cell: {
    height: '15px',
    width: '15px',
    // border: '1px solid rgba(0, 0, 0, 0.2)',
    outline: 'none',
  },
});

class Cell extends Component {
  static propTypes = {
    cellClass: PropTypes.string.isRequired,
    position: PropTypes.array.isRequired,
    playerRow: PropTypes.number.isRequired,
    playerColumn: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      position: '',
    };
  }

  componentWillReceiveProps() {
    this.setState({
      position: this.props.position,
    });
  }

  distanceToPlayer = (row, column) => {
    const { position } = this.props;
    const distanceRow = position[0] - row;
    const distanceColumn = position[1] - column;

    return Math.sqrt(Math.pow(distanceRow, 2) + Math.pow(distanceColumn, 2));
  }

  render() {
    const {
      playerRow,
      playerColumn,
    } = this.props;

    const distance = this.distanceToPlayer(playerRow, playerColumn);
    const fog = distance > 5;

    const {
      cell,
    } = createCellStyles();

    return (
      <div className={(fog ? 'fog' : this.props.cellClass)} style={cell} />
    );
  }
}

export default Radium(Cell);
