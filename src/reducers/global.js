import _ from "lodash";
import initialState from "../reducers/initialState";
import { TOGGLE_NAV, ANIMATION_LOAD } from "../constants/ActionTypes";

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case TOGGLE_NAV: 
    return _.assign({}, state, {isOpen: action.isOpen});
  case ANIMATION_LOAD: 
    return _.assign({}, state, {isLoad: action.isLoad});
  default:
    return state;
  }
}