import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import './App.css';

import Grid from './components/grid';
import Stats from './components/stats';

const createAppStyles = () => ({
  appWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.rows = 80;
    this.columns = 50;

    this.state = {
      state: null,
    };
  }

  render() {
    const {
      appWrapper,
    } = createAppStyles();

    return (
      <div className="App" style={appWrapper}>
        <Grid
          rows={this.rows}
          columns={this.columns}
        />
        <Stats />

      </div>
    );
  }
}

export default Radium(App);
