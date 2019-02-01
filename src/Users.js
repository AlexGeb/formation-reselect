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

const mapStateToProps = state => ({ users: Object.values(state.users.byId) });

export default connect(mapStateToProps)(Users);
