import SessionActionTypes from "./session.types";

const INITIAL_STATE = {
  activeSession: undefined,
  sessions: [],
};

const SessionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
	case SessionActionTypes.ADD_SESSION: {
		return {
			...state
		}
	}
	case SessionActionTypes.DELETE_SESSION {
		return {
			...state
		}
	}

	default: 
	return state;
	}
};

export default SessionReducer
