import axios from 'axios';
// import dummy from '../../../dummy_data';

export const FETCH_RECIPES = 'fetch_recipes';

export function fetchRecipes(term) {
  const request = axios.post('/recipes', { term });
  console.log('HITTING IN ACTION CREATOR');
  return {
    type: FETCH_RECIPES,
    payload: request,
  };
}
