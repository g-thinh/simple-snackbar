import React from "react";
import styled, { keyframes } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { toggleSnackbarClose } from "../redux/uiActions";
import { FiX, FiBell } from "react-icons/fi";

const Snackbar = ({ timeout, anchor }) => {
  const dispatch = useDispatch();
  const TIME = (timeout - 500) / 1000 + "s";
  const SHOW = useSelector((state) => state.toggleSnackbar);
  const MESSAGE = useSelector((state) => state.snackbarMessage);

  let POSITION;
  let TIMER;
  function handleTimeout() {
    TIMER = setTimeout(() => {
      dispatch(toggleSnackbarClose());
      POSITION = {};
    }, timeout);
  }

  function handleClose() {
    clearTimeout(TIMER);
    dispatch(toggleSnackbarClose());
  }

  if (SHOW) {
    handleTimeout();
  }

  switch (anchor) {
    case "bottom-center": {
      POSITION = { top: false, left: false };
      console.log("bottom-center", POSITION);
      break;
    }

    case "top-center": {
      POSITION = { top: true, left: false, right: false, center: true };
      console.log("top-center", POSITION);
      break;
    }

    default: {
      POSITION = { top: true, left: false, right: false, center: true };
      console.log("default position", POSITION);
      break;
    }
  }

  return (
    SHOW && (
      <Bar timeout={TIME} position={POSITION}>
        <FiBell size="1.3rem" />
        <Text>{MESSAGE}</Text>
        <Button onClick={handleClose}>
          <FiX size="1.3rem" />
        </Button>
      </Bar>
    )
  );
};

const fadein = (pos) => keyframes`
    from {
      ${pos.top ? "top: 0" : "bottom: 0"};
      opacity: 0;
    }
    to {
      ${pos.top ? "top: 10%" : "bottom: 10%"};
      opacity: 1;
    }
`;

const fadeout = (pos) => keyframes`
    from {
      ${pos.top ? "top: 10%" : "bottom: 10%"};
      opacity: 1;
    }
    to {

      ${pos.top ? "top: 0" : "bottom: 0"};
      opacity: 0;
    }
`;

const Bar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index: 9;
  ${(props) => (props.position.top ? "top: 10%" : "bottom: 10%")};
  left: 50%;
  transform: translateX(-50%);

  width: auto;
  padding: 0.625rem 1rem;
  border-radius: 0.75rem;
  background-color: hsla(200deg, 100%, 65%, 0.7);
  border: transparent;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  color: white;
  font-weight: 500;
  font-size: 18px;
  text-align: center;

  /* animation: fadein 0.5s, fadeout 0.5s ${(props) => props.timeout}; */
  animation: ${(props) => fadein(props.position)} 0.5s,
    ${(props) => fadeout(props.position)} 0.5s ${(props) => props.timeout};

  &:hover {
    /* filter: brightness(0.9); */
    /* background-color: hsla(200deg, 100%, 65%, 0.8); */
  }
`;

const Text = styled.p`
  font-weight: 500;
  line-height: 1.6;
  font-size: 1rem;
  margin-left: 0.875rem;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.875rem;
  padding: 0;
  height: 1.7rem;
  width: 1.7rem;
  text-align: center;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: hsla(200deg, 100%, 65%, 0.3);
  }
`;

export default Snackbar;
