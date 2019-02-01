import React from 'react';
import { connect } from 'react-redux';

const UsersByTeam = ({ team }) => {
  console.log('render UsersByTeam');
  return (
    <div>
      <h4 style={{ textDecoration: 'underline' }}>{team.name}</h4>
      <ul>
        {team.users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const team = state.teams.byId[ownProps.teamId];
  const users = Object.values(state.users.byId).filter(
    user => user.teamId === ownProps.teamId
  );
  return { team: { ...team, users } };
};

export default connect(mapStateToProps)(UsersByTeam);
