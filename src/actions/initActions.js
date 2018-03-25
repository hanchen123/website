import { ANIMATION_LOAD } from "../constants/ActionTypes";

export function animationLoad(isLoad) {
  return {
    type: ANIMATION_LOAD,
    isLoad
  };
}