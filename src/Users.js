import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

export const Users = ({ users }) => {
  console.log('render Users');
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

const usersSelector = createSelector(
  [state => state.users.byId],
  usersById => Object.values(usersById)
);

const mapStateToProps = state => ({ users: usersSelector(state) });

export default connect(mapStateToProps)(Users);
