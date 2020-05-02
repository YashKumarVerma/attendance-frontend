import EventActionTypes from "./event.types";

const INITIAL_STATE = {
  activeEvent: undefined,
  events: [],
};

const EventReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EventActionTypes.ADD_EVENT: {
      return {
        ...state,
      };
    }
    case EventActionTypes.DELETE_EVENT: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default EventReducer;
