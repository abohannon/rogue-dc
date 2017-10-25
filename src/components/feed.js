import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import HeartIcon from 'material-ui/svg-icons/action/favorite';
import NextLevelIcon from 'material-ui/svg-icons/action/trending-up';
import XPIcon from 'material-ui/svg-icons/social/poll';
import FireIcon from 'material-ui/svg-icons/social/whatshot';
import AttackIcon from 'material-ui/svg-icons/action/gavel';
import HealthIcon from 'material-ui/svg-icons/maps/local-hospital';

const feedStyle = {
  alignItems: 'flex-start',
  marginLeft: 8,
  maxWidth: 200,
  maxHeight: 445,
  overflow: 'hidden',
};

class Feed extends Component {
  static propTypes = {
    feed: PropTypes.array.isRequired,
    updateFeed: PropTypes.func.isRequired,
    health: PropTypes.number.isRequired,
    xp: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
    attack: PropTypes.number.isRequired,
  }
  componentWillReceiveProps(nextProps) {
    const {
      feed,
      updateFeed,
      health,
      xp,
      level,
      attack,
    } = this.props;
    const feedCopy = [...feed];
    if (feed.length === 0) {
      feedCopy.unshift(<ListItem style={{ fontSize: 13 }} primaryText="Welcome to Adam's Rogue-like Dungeon Crawler. Have fun!" leftIcon={<HeartIcon color={'#D50000'} />} />);
      updateFeed(feedCopy);
    } else if (nextProps.health > health) {
      feedCopy.unshift(
        <ListItem style={{ fontSize: 13 }} primaryText="You picked up health!" leftIcon={<HealthIcon color={'#64DD17'} />} />,
      );
      updateFeed(feedCopy);
    } else if (nextProps.xp > xp) {
      feedCopy.unshift(
        <ListItem style={{ fontSize: 13 }} primaryText="Nice fight! You gained XP." leftIcon={<XPIcon color={'#212121'} />} />,
      );
      updateFeed(feedCopy);
    } else if (nextProps.level > level) {
      feedCopy.unshift(
        <ListItem style={{ fontSize: 13 }} primaryText="Great work! You've leveled up!" leftIcon={<NextLevelIcon color={'#2196F3'} />} />,
      );
      updateFeed(feedCopy);
    } else if (nextProps.attack > attack) {
      feedCopy.unshift(
        <ListItem style={{ fontSize: 13 }} primaryText="You picked up a weapon!" leftIcon={<AttackIcon color={'#FFEA00'} />} />,
      );
      updateFeed(feedCopy);
    } else if (nextProps.health < health) {
      feedCopy.unshift(
        <ListItem style={{ fontSize: 13 }} primaryText="You've engaged an enemy and are taking damage!" leftIcon={<FireIcon color={'#FF6F00'} />} />,
      );
      updateFeed(feedCopy);
    }
  }

  render() {
    return 0,
      <div style={feedStyle}>
      <List>
          {this.props.feed}
        </List>
    </div>;
  }
}


export default Radium(Feed);
