import React from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = state => (
  console.log('mapStateToProps called'),
  {
    users: state.users //.filter(user => user.teamId === 1)
  }
);

export default connect(mapStateToProps)(Users);
