import { TOGGLE_MODAL } from "../types";

const initialState = {
  modal: false,
  modalInfo: null,
};

//eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modal: state.modal ? false : true,
        modalInfo: action.payload,
      };
    default:
      return state;
  }
}
