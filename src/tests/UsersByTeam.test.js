import { makeTeamSelector } from '../UsersByTeam';

describe('makeTeamSelector', () => {
  const users = [
    { id: 1, name: 'Bob Le Bricoleur', teamId: 1 },
    { id: 2, name: 'Léo, apprenti de Bob', teamId: 1 },
    { id: 3, name: 'Flipper Le Dauphin', teamId: 2 },
    { id: 4, name: 'Nemo Le Poisson Rouge', teamId: 2 }
  ];
  const teams = [
    { id: 1, name: 'Les bricolos' },
    { id: 2, name: 'Les nageurs' }
  ];

  it('should select the right team', () => {
    expect(makeTeamSelector().resultFunc(1, teams, users)).toEqual({
      id: 1,
      name: 'Les bricolos',
      users: [
        { id: 1, name: 'Bob Le Bricoleur', teamId: 1 },
        { id: 2, name: 'Léo, apprenti de Bob', teamId: 1 }
      ]
    });
  });

  it('should give an empty team', () => {
    expect(makeTeamSelector().resultFunc(4, teams, users)).toEqual({
      users: []
    });
  });
});
