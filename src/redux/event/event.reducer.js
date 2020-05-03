import EventActionTypes from "./event.types";

const INITIAL_STATE = {
  events: [],
  activeEvent: null,
};

const EventReducer = (state = INITIAL_STATE, action) => {
  if (action.type === EventActionTypes.ADD_EVENT) {
    return Object.assign({}, state, {
      events: state.events.concat(...action.payload),
    });
  }

  if (action.type === EventActionTypes.SET_ACTIVE_EVENT) {
    for (let i = 0; i < state.events.length; i += 1) {
      if (state.events[i].slug === action.payload) {
        return Object.assign({}, state, {
          activeEvent: state.events[i],
        });
      }
    }
    return { ...state };
  }

  return state;
  //   switch (action.type) {
  //     case EventActionTypes.ADD_EVENT: {
  //       console.log("dispatcher running");
  //       //   return {
  //       //     ...state,
  //       //     events: [state.events, action.payload],
  //       //   };
  //     }
  //     case EventActionTypes.DELETE_EVENT: {
  //       return {
  //         ...state,
  //       };
  //     }
  //     default:
  //       return state;
  //   }
};

export default EventReducer;
