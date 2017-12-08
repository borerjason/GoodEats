import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import RecipesReducer from '../reducers/reducer_recipes';

const rootReducer = combineReducers({
  form: formReducer,
  recipes: RecipesReducer,
});

export default rootReducer;
