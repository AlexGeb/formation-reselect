import { combineReducers } from 'redux';

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
};

const usersReducer = (
  state = {
    byId: {
      1: { id: 1, name: 'Bob Le Bricoleur', teamId: 1 },
      2: { id: 2, name: 'Léo, apprenti de Bob', teamId: 1 },
      3: { id: 3, name: 'Flipper Le Dauphin', teamId: 2 },
      4: { id: 4, name: 'Nemo Le Poisson Rouge', teamId: 2 }
    }
  }
) => state;

export default combineReducers({
  counter: counterReducer,
  users: usersReducer
});
