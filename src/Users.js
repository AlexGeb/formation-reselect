import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

export const Users = ({ users }) => {
  console.log(
    'render Users,',
    'usersSelector number of recomputations : ',
    usersSelector.recomputations()
  );
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

const usersSelector = createSelector(
  [state => state.users],
  users => (console.log('Filter !'), users.filter(user => user.teamId === 2))
);

const mapStateToProps = state => ({ users: usersSelector(state) });

export default connect(mapStateToProps)(Users);
