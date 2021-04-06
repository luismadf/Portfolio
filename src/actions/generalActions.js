import { TOGGLE_MODAL } from "../types";

export function toggleModal(project) {
  return (dispatch) => {
    dispatch(toggleModalAction(project));
  };
}

const toggleModalAction = (project) => ({
  type: TOGGLE_MODAL,
  payload: project,
});
