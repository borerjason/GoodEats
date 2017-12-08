import axios from 'axios';
import dummy from '../../../dummy_data';

export const FETCH_RECIPES = 'fetch_recipes';

export function fetchRecipes(term) {
  // const request = axios.get('https://api.edamam.com/search', {
  //   params: { term },
  // });
  console.log('HITTING IN ACTION CREATOR', dummy);
  return {
    type: FETCH_RECIPES,
    payload: dummy,
  };
}
