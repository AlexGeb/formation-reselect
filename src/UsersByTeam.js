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

const teamsSelector = state => state.teams;
const usersSelector = state => state.users;

const teamSelector = teamId =>
  createSelector(
    [teamsSelector, usersSelector],
    (teams, users) => {
      return {
        ...teams.find(team => team.id === teamId),
        users: users.filter(user => user.teamId === teamId)
      };
    }
  );

const mapStateToProps = (state, props) => ({
  team: teamSelector(props.teamId)(state)
});

export default connect(mapStateToProps)(UsersByTeam);
