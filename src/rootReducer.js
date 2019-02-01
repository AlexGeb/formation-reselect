import { combineReducers } from 'redux';

import { reducer as growthReducer } from './redux/growth';

export default combineReducers({
  growth: growthReducer
});
