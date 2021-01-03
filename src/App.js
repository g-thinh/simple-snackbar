import React from "react";
import styled from "styled-components";
import Snackbar from "./components/Snackbar";
import { useDispatch } from "react-redux";
import { toggleSnackbarOpen } from "./redux/uiActions";

function App() {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <button onClick={(ev) => dispatch(toggleSnackbarOpen(true))}>
        Click Me
      </button>
      <Snackbar>Hello World!</Snackbar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fffffc;
`;

export default App;
