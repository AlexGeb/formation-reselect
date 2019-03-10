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

const teamIdSelector = (_, props) => props.teamId;
const teamsSelector = state => state.teams;
const usersSelector = state => state.users;

const makeTeamSelector = () =>
  createSelector(
    [teamIdSelector, teamsSelector, usersSelector],
    (teamId, teams, users) => {
      return {
        ...teams.find(team => team.id === teamId),
        users: users.filter(user => user.teamId === teamId)
      };
    }
  );

const makeMapStateToProps = (initialState, initialProps) => {
  const teamSelector = makeTeamSelector();
  return (state, props) => ({
    team: teamSelector(state, props)
  });
};

export default connect(makeMapStateToProps)(UsersByTeam);
