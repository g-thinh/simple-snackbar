import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggleSnackbar } from "./redux/uiActions";

function App() {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <button onClick={(ev) => dispatch(toggleSnackbar())}>Click Me</button>
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
