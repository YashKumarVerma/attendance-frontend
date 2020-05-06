import EventActionTypes from "./event.types";

const INITIAL_STATE = {
  events: [],
  activeEvent: null,
  activeSession: null,
};

const EventReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //   handle creation of new events(s)
    case EventActionTypes.ADD_EVENT: {
      return Object.assign({}, state, {
        events: state.events.concat(action.payload),
      });
    }

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

    case EventActionTypes.DELETE_SESSION: {
      console.log("Reducer -> DeleteSession -> Params", action.payload);
      const { slug, parent } = action.payload;

      const newEventsArray = [];
      //   loop through all the events
      for (let i = 0; i < state.events.length; i++) {
        // if we find the event from which session is deleted,
        if (state.events[i].slug === parent) {
          // first remove the sessionSlug from event.sessions
          newEventsArray.push({
            _id: state.events[i]._id,
            eventName: state.events[i].eventName,
            slug: state.events[i].slug,
            description: state.events[i].description,
            participants: state.events[i].participants,
            admin: state.events[i].admin,
            sessions: state.events[i].sessions.filter(
              (sessionSlug) => sessionSlug !== slug
            ),
            sessionDetails: state.events[i].sessionDetails.filter(
              (sessionEntry) => sessionEntry.slug !== slug
            ),
          });
        }
        // else simply append it for the new state object
        else {
          newEventsArray.push(state.events[i]);
        }
      }
      return Object.assign({}, state, {
        events: [...newEventsArray],
      });
    }

    case EventActionTypes.SET_ACTIVE_SESSION: {
      console.log("Setting active session : ", action.payload);
      for (let i = 0; i < state.activeEvent.sessionDetails.length; i += 1) {
        if (state.activeEvent.sessionDetails[i].slug === action.payload) {
          return Object.assign({}, state, {
            activeSession: state.activeEvent.sessionDetails[i],
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
