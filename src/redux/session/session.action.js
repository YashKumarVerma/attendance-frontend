import SessionActionTypes from "./session.types";

export const addSession = (session) => ({
  type: SessionActionTypes.ADD_SESSION,
  payload: session,
});
