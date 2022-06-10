import { combineReducers } from 'redux';
import characterReducer from './Stock/characters/characters.reducer';

const RootReducer = combineReducers({
  characterReducer,
});

export default RootReducer;
