import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import Badge from 'material-ui/Badge';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import LevelIcon from 'material-ui/svg-icons/action/perm-identity';
import HealthIcon from 'material-ui/svg-icons/action/favorite';
import XPIcon from 'material-ui/svg-icons/social/poll';
import AttackIcon from 'material-ui/svg-icons/action/gavel';

const createStyles = props => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '32px 0 0 0',
  },
  healthStyle: {
    backgroundColor: props,
    color: 'white',
  },
});

class Stats extends Component {
  static propTypes = {
    level: PropTypes.number.isRequired,
    health: PropTypes.number.isRequired,
    attack: PropTypes.number.isRequired,
    xp: PropTypes.number.isRequired,
    toggleFog: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      mystate: null, // TODO: Remove
    };
  }
  // TODO: Doesn't quite work
  healthStatus = (number) => {
    let result;
    if (number > 76) {
      result = '#64DD17';
    } else if (number < 76 && number > 51) {
      result = '#FFC107';
    } else if (number < 51 && number > 26) {
      result = '#FF9800';
    } else if (number < 26 && number > 11) {
      result = '#FF5722';
    } else {
      result = '#DD2C00';
    }
    return result;
  }

  render() {
    const {
      level,
      health,
      attack,
      xp,
      toggleFog,
      reset,
      fog,
    } = this.props;

    const healthFunc = this.healthStatus(health);

    const {
      container,
      healthStyle,
    } = createStyles(healthFunc);

    return (
      <div style={container}>
        <div>
          <Badge
            className="level-icon"
            badgeContent={level}
            badgeStyle={{ backgroundColor: '#2196F3', color: 'white' }}
          >
            <IconButton tooltip="Level">
              <LevelIcon />
            </IconButton>
          </Badge>
          <Badge
            className="health-icon"
            badgeContent={health}
            badgeStyle={healthStyle}

          >
            <IconButton tooltip="Health">
              <HealthIcon />
            </IconButton>
          </Badge>
          <Badge
            className="attack-icon"
            badgeContent={attack}
            badgeStyle={{ backgroundColor: '#FFEA00', color: 'black' }}

          >
            <IconButton tooltip="Attack">
              <AttackIcon />
            </IconButton>
          </Badge>
          <Badge
            className="xp-icon"
            badgeContent={xp}
            badgeStyle={{ backgroundColor: 'black', color: 'white' }}

          >
            <IconButton tooltip="XP">
              <XPIcon />
            </IconButton>
          </Badge>
        </div>
        <div>
          <Toggle label="Fog" onToggle={toggleFog} toggled={!!fog} />
        </div>
        <div>
          <RaisedButton label="Reset" onClick={reset} />
        </div>
      </div>

    );
  }
}

export default Radium(Stats);
