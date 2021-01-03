import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { toggleSnackbarClose } from "../redux/uiActions";

const Snackbar = ({ children }) => {
  const dispatch = useDispatch();
  const SHOW = useSelector((state) => state.toggleSnackbar);

  if (SHOW) {
    setTimeout(() => {
      dispatch(toggleSnackbarClose());
    }, 3000);
  }

  return SHOW && <Bar>{children}</Bar>;
};

const Bar = styled.div`
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  padding: 0 10px;
  height: 45px;
  border-radius: 22px;
  border: 2px solid hsla(200deg, 100%, 65%, 0.7);
  background-color: hsla(200deg, 100%, 65%, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  z-index: 9;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;

  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 10%;
      opacity: 1;
    }
  }

  @keyframes fadeout {
    from {
      bottom: 10%;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
`;

export default Snackbar;
