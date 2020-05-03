import EventActionTypes from "./event.types";

const INITIAL_STATE = {
  events: [],
  activeEvent: null,
};

const EventReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //   handle creation of new events(s)
    case EventActionTypes.ADD_EVENT: {
      return Object.assign({}, state, {
        events: state.events.concat(...action.payload),
      });
    }

    // handle event selection
    case EventActionTypes.SET_ACTIVE_EVENT: {
      for (let i = 0; i < state.events.length; i += 1) {
        if (state.events[i].slug === action.payload) {
          return Object.assign({}, state, {
            activeEvent: state.events[i],
          });
        }
      }
      return { ...state };
    }

    default:
      return state;
  }
};

export default EventReducer;
