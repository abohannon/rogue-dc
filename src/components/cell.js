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
