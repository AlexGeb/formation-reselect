import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

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

const makeTeamSelector = () =>
  createSelector(
    [
      (state, props) => props.teamId,
      state => state.teams.byId,
      state => state.users.byId
    ],
    (teamId, teamsById, usersById) => {
      const team = teamsById[teamId];
      const users = Object.values(usersById).filter(
        user => user.teamId === teamId
      );
      return { ...team, users };
    }
  );

const makeMapStateToProps = () => {
  const teamSelector = makeTeamSelector();
  return (state, ownProps) => ({
    team: teamSelector(state, ownProps)
  });
};

export default connect(makeMapStateToProps)(UsersByTeam);
