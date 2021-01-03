// import produce from "immer";

const initialState = {
  toggleSnackbar: false,
  snackbarMessage: null,
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_SNACKBAR_OPEN": {
      // console.log("Snackbar is Open!");
      return {
        ...state,
        toggleSnackbar: true,
        snackbarMessage: action.message,
      };
    }

    case "TOGGLE_SNACKBAR_CLOSE": {
      // console.log("Snackbar is Closed!");
      return {
        ...state,
        toggleSnackbar: false,
        snackbarMessage: null,
      };
    }

    default: {
      return state;
    }
  }
}
