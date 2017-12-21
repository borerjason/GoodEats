import _ from 'lodash';
import { FETCH_RECIPES } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_RECIPES:
    console.log(action.payload.data);
      // return action.payload.data.hits;
      return _.mapKeys(action.payload.data, 'label');
    default:
      return state;
  }
}
