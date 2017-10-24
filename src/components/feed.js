import React, { Component } from 'react';
import Radium from 'radium';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import HealthIcon from 'material-ui/svg-icons/action/favorite';
import NextLevelIcon from 'material-ui/svg-icons/action/trending-up';
import XPIcon from 'material-ui/svg-icons/social/poll';
import FireIcon from 'material-ui/svg-icons/social/whatshot';
import AttackIcon from 'material-ui/svg-icons/action/gavel';
// TODO: Clean up these imports
const feedStyle = {
  alignItems: 'flex-start',
  marginLeft: 8,
  maxWidth: 200,
  maxHeight: 445,
  overflow: 'hidden',
};

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feed: [
        <ListItem style={{ fontSize: 13 }} primaryText="Welcome to Adam's Rogue-like Dungeon Crawler. Have fun!" leftIcon={<HealthIcon />} />,
      ],
    };
  }

  componentWillReceiveProps(nextProps) {
    const feedCopy = [...this.state.feed];
    if (nextProps.health > this.props.health) {
      feedCopy.unshift(
        <ListItem style={{ fontSize: 13 }} primaryText="You picked up health!" leftIcon={<HealthIcon />} />,
      );
    } else if (nextProps.xp > this.props.xp) {
      feedCopy.unshift(
        <ListItem style={{ fontSize: 13 }} primaryText="Nice fight! You gained XP." leftIcon={<XPIcon />} />,
      );
    } else if (nextProps.level > this.props.level) {
      feedCopy.unshift(
        <ListItem style={{ fontSize: 13 }} primaryText="Great work! You've leveled up!" leftIcon={<NextLevelIcon />} />,
      );
    } else if (nextProps.attack > this.props.attack) {
      feedCopy.unshift(
        <ListItem style={{ fontSize: 13 }} primaryText="You picked up a weapon!" leftIcon={<AttackIcon />} />,
      );
    } else if (nextProps.health < this.props.health) {
      feedCopy.unshift(
        <ListItem style={{ fontSize: 13 }} primaryText="You've engaged an enemy and are taking damage!" leftIcon={<FireIcon />} />,
      );
    }
    this.setState({
      feed: feedCopy,
    });
  }

  render() {
    return 0,
      <div style={feedStyle}>
      <List>
          {this.state.feed}
        </List>
      <Divider />
    </div>;
  }
}


export default Radium(Feed);
