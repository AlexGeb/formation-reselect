import { combineReducers } from 'redux';

import { reducer as dataReducer } from './redux/data';

export default combineReducers({
  data: dataReducer
});
