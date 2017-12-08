import _ from 'lodash';
import { FETCH_RECIPES } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_RECIPES:
      console.log(_.mapKeys(action.payload, 'label'));
      return _.mapKeys(action.payload, 'label');
    default:
      return state;
  }
}
