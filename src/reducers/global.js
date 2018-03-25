import _ from "lodash";
import initialState from "../reducers/initialState";
import { TOGGLE_NAV } from "../constants/ActionTypes";

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case TOGGLE_NAV: 
    return _.assign({}, state, {isOpen: action.isOpen});
  default:
    return state;
  }
}