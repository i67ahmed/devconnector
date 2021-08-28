/* eslint-disable import/no-anonymous-default-export */

import { CLEAR_ERRORS, SET_ERRORS, GET_ERRORS } from "../actions/types";

const initialState = {};

export default function(state=initialState, action) {
  switch(action.type){
    case GET_ERRORS:
      return action.payload;
    case SET_ERRORS:
      return action.payload;
    case CLEAR_ERRORS:
      return state;
    default:
      return state;
  }
}