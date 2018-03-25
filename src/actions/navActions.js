import { TOGGLE_NAV } from "../constants/ActionTypes";

export function toggleNav(isOpen) {
  return {
    type: TOGGLE_NAV,
    isOpen
  };
}