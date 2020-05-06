import EventActionTypes from "./event.types";

export const addEvent = (payload) => ({
  type: EventActionTypes.ADD_EVENT,
  payload: payload,
});

export const deleteEvent = (payload) => ({
  type: EventActionTypes.DELETE_EVENT,
  payload: payload,
});

export const setActiveEvent = (payload) => ({
  type: EventActionTypes.SET_ACTIVE_EVENT,
  payload: payload,
});

export const addSession = (payload) => ({
  type: EventActionTypes.ADD_SESSION,
  payload: payload,
});

export const deleteSession = (payload) => ({
  type: EventActionTypes.DELETE_SESSION,
  payload: payload,
});

export const setActiveSession = (payload) => ({
  type: EventActionTypes.SET_ACTIVE_SESSION,
  payload: payload,
});
