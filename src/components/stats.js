import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import LevelIcon from 'material-ui/svg-icons/action/perm-identity';
import HealthIcon from 'material-ui/svg-icons/action/favorite';
import NextLevelIcon from 'material-ui/svg-icons/action/trending-up';
import XPIcon from 'material-ui/svg-icons/social/poll';
import AttackIcon from 'material-ui/svg-icons/action/gavel';

const createStyles = () => ({
  container: {
    margin: '32px 0 0 250px',
  },
});

class Stats extends Component {
  static propTypes = {
    level: PropTypes.number.isRequired,
    health: PropTypes.number.isRequired,
    attack: PropTypes.number.isRequired,
    xp: PropTypes.number.isRequired,
    nextLevel: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      mystate: null, // TODO: Remove
    };
  }

  render() {
    const {
      container,
    } = createStyles();

    const {
      level,
      health,
      attack,
      xp,
      nextLevel,
    } = this.props;

    return (
      <div style={container}>
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
          badgeStyle={{ backgroundColor: '#64DD17', color: 'white' }}

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
        <Badge
          className="next-level-icon"
          badgeContent={nextLevel}
          badgeStyle={{ backgroundColor: 'black', color: 'white' }}

        >
          <IconButton tooltip="Next Level">
            <NextLevelIcon />
          </IconButton>
        </Badge>
      </div>

    );
  }
}

export default Radium(Stats);
