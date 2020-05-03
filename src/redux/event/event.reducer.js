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
        events: state.events.concat(action.payload),
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

    case EventActionTypes.ADD_SESSION: {
      console.log("Inside ADD_SESSION reducer : ", action);
      const session = action.payload[0];
      const newEventsArray = [];
      for (let i = 0; i < state.events.length; i += 1) {
        if (state.events[i].slug === session.parent) {
          newEventsArray.push({
            _id: state.events[i]._id,
            eventName: state.events[i].eventName,
            slug: state.events[i].slug,
            description: state.events[i].description,
            participants: state.events[i].participants,
            admin: state.events[i].admin,
            sessions: [...state.events[i].sessions, session.slug],
            sessionDetails: [...state.events[i].sessionDetails, session],
          });
        } else {
          newEventsArray.push(state.events[i]);
        }
      }

      return Object.assign({}, state, {
        events: [...newEventsArray],
      });
    }

    // case EventActionTypes.DELETE_EVENT: {
    //   return { ...state };
    // }

    default:
      return state;
  }
};

export default EventReducer;
