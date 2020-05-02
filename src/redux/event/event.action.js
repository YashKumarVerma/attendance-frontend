import EventActionTypes from "./event.types";

export const addEvent = (payload) => ({
  type: EventActionTypes.ADD_EVENT,
  payload: payload,
});
