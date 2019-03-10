import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

export const Users = ({ users, userNames }) => {
  console.log(
    'render Users,',
    'usersSelector number of recomputations : ',
    usersSelector.recomputations()
  );
  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <p>User names : {userNames.join(', ')}</p>
    </>
  );
};

const usersSelector = createSelector(
  [state => state.users],
  users => users.filter(user => user.teamId === 2)
);

const userNamesSelector = createSelector(
  [usersSelector],
  users => users.map(user => user.name)
);

const mapStateToProps = state => ({
  users: usersSelector(state),
  userNames: userNamesSelector(state)
});

export default connect(mapStateToProps)(Users);
