import React, { Component } from 'react';
import Radium from 'radium';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import HealthIcon from 'material-ui/svg-icons/action/favorite';
import NextLevelIcon from 'material-ui/svg-icons/action/trending-up';
import XPIcon from 'material-ui/svg-icons/social/poll';
import AttackIcon from 'material-ui/svg-icons/action/gavel';
// TODO: Clean up these imports
const feedStyle = {
  alignItems: 'flex-start',
  marginLeft: 8,
  maxWidth: 200,
};

class Feed extends Component {
  render() {
    const feed = [];
    const feedItems = {
      health: <ListItem primaryText="You picked up health!" leftIcon={<HealthIcon />} />,
      weapon: <ListItem primaryText="You picked up a weapon!" leftIcon={<AttackIcon />} />,
      xp: <ListItem primaryText="Nice fight! You gained XP." leftIcon={<XPIcon />} />,
      levelUp: <ListItem primaryText="Great work! You've leveled up!" leftIcon={<NextLevelIcon />} />,
    };
    // if (nextProps.health < this.props.health) {
    //   console.log('Health!');
    // }
    // feed.push(feedItems.health);

    return 0,
      <div style={feedStyle}>
      <List>
          {feed}
        </List>
      <Divider />
    </div>;
  }
}


export default Radium(Feed);
