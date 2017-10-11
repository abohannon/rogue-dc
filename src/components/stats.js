import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

class Stats extends Component {
  render() {
    return (
      <div>
        <div>Level</div>
        <div>XP</div>
        <div>Health</div>
        <div>Damage</div>
      </div>

    );
  }
}

export default Radium(Stats);
