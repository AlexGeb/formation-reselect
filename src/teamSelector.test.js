import { makeTeamSelector } from './UsersByTeam';

describe('makeTeamSelector', () => {
  const usersById = {
    1: { name: 'Jack', teamId: 1 },
    2: { name: 'Paul', teamId: 2 },
    3: { name: 'Peter', teamId: 1 },
    4: { name: 'Bob', teamId: 2 }
  };

  const teamsById = { 1: { name: 'rouge' }, 2: { name: 'bleu' } };
  it('should return the formatted team object', () => {
    expect(makeTeamSelector().resultFunc(1, teamsById, usersById)).toEqual({
      name: 'rouge',
      users: [{ name: 'Jack', teamId: 1 }, { name: 'Peter', teamId: 1 }]
    });
  });
});
