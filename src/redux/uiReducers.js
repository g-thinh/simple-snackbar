// import produce from "immer";

const initialState = {
  toggleSnackbar: false,
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_SNACKBAR": {
      return {
        ...state,
        toggleSnackbar: !state.toggleSnackbar,
      };
    }

    case "TOGGLE_SNACKBAR_OPEN": {
      console.log("Snackbar is Open!");
      return {
        ...state,
        toggleSnackbar: true,
      };
    }

    case "TOGGLE_SNACKBAR_CLOSE": {
      console.log("Snackbar is Closed!");
      return {
        ...state,
        toggleSnackbar: false,
      };
    }

    default: {
      return state;
    }
  }
}
