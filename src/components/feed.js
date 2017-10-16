import React from 'react';
import Radium from 'radium';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import LevelIcon from 'material-ui/svg-icons/action/perm-identity';
import HealthIcon from 'material-ui/svg-icons/action/favorite';
import NextLevelIcon from 'material-ui/svg-icons/action/trending-up';
import XPIcon from 'material-ui/svg-icons/social/poll';
import AttackIcon from 'material-ui/svg-icons/action/gavel';

const feedStyle = {
  marginLeft: 8,
  maxWidth: 200,
};

const Feed = () => (
  <div style={feedStyle}>
    <List>
      <ListItem primaryText="You picked up health!" leftIcon={<HealthIcon />} />
      <ListItem primaryText="You picked up a weapon!" leftIcon={<AttackIcon />} />
      <ListItem primaryText="Nice fight! You gained 10 XP." leftIcon={<XPIcon />} />
      <ListItem primaryText="Great work! You've leveled up!" leftIcon={<NextLevelIcon />} />
    </List>
    <Divider />
  </div>
);


export default Radium(Feed);
