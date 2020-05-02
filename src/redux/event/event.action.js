import EventActionTypes from "./event.types";

export const addEvent = (payload) => ({
  type: EventActionTypes.ADD_EVENT,
  payload: payload,
});

export const setActiveEvent = (payload) => ({
  type: EventActionTypes.SET_ACTIVE_EVENT,
  payload: payload,
});
