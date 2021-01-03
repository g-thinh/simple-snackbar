import React from "react";
import styled from "styled-components";
import Snackbar from "./components/Snackbar";
import GlobalStyles from "./components/GlobalStyles";
import { useDispatch } from "react-redux";
import { toggleSnackbarOpen } from "./redux/uiActions";

function App() {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <button onClick={(ev) => dispatch(toggleSnackbarOpen())}>Click Me</button>
      <Snackbar timeout={3000}>Hello World!</Snackbar>
      <GlobalStyles />
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
