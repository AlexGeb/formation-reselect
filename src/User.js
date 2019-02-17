import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

export const User = ({ user }) => {
  console.log('render User');
  return <li>{user.name}</li>;
};

const makeUserSelector = () =>
  createSelector(
    [(state, props) => props.userId, state => state.users.byId],
    (userId, usersById) => (console.log(userId), usersById[userId])
  );

const makeMapStateToProps = () => {
  const userSelector = makeUserSelector();
  return (state, props) => ({
    user: userSelector(state, props)
  });
};

export default connect(makeMapStateToProps)(User);
