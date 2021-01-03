// import produce from "immer";

const initialState = {
  toggleSnackbar: false,
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_SNACKBAR": {
      console.log("Button was Clicked!");
      return {
        ...state,
        toggleSnackbar: !state.toggleSnackbar,
      };
    }

    default: {
      return state;
    }
  }
}
