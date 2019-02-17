import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import User from './User';

export const Users = ({ userIds }) => {
  console.log('render Users');
  return (
    <ul>
      {userIds.map(userId => (
        <User key={userId} userId={userId} />
      ))}
    </ul>
  );
};

const userIdsSelector = createSelector(
  [state => state.users.byId],
  usersById => (
    console.log('userIdsSelector', usersById), Object.keys(usersById)
  )
);

const mapStateToProps = state => ({
  userIds: userIdsSelector(state)
});

export default connect(mapStateToProps)(Users);
