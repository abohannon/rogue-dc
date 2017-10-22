import React from 'react';
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

const feedItems = [
  <ListItem primaryText="Great work! You've leveled up!" leftIcon={<NextLevelIcon />} />,
  <ListItem primaryText="You picked up health!" leftIcon={<HealthIcon />} />,
  <ListItem primaryText="You picked up a weapon!" leftIcon={<AttackIcon />} />,
  <ListItem primaryText="Nice fight! You gained 10 XP." leftIcon={<XPIcon />} />,
  <ListItem primaryText="Great work! You've leveled up!" leftIcon={<NextLevelIcon />} />,
];

const Feed = () => (
  <div style={feedStyle}>
    <List>
      {feedItems}
    </List>
    <Divider />
  </div>
);

export default Radium(Feed);
