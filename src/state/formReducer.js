import { actionTypes } from "./actionTypes";

export const initialState = {
  firstName: "",
  lastName: "",
  userName: "",
  city: "",
  state: "",
  zip: "",
  checkBox: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actionTypes.TOGGLE:
      return {
        ...state,
        checkBox: !state.checkBox,
      };
    default:
      return state;
  }

  // if (action.type === "INPUT") {
  //   return {
  //     ...state,
  //     [action.payload.name]: action.payload.value,
  //   };
  // }
};
