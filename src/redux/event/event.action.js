import EventActionTypes from "./event.types";

export const addEvent = (event) => ({
  type: EventActionTypes.ADD_EVENT,
  payload: event,
});
