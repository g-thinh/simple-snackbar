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
      POSITION = { top: false, left: false, center: true };
      console.log("bottom-center", POSITION);
      break;
    }

    case "top-center": {
      POSITION = { top: true, left: false, center: true };
      console.log("top-center", POSITION);
      break;
    }

    case "top-left": {
      POSITION = { top: true, left: true, center: false };
      console.log("top-center", POSITION);
      break;
    }

    case "top-right": {
      POSITION = { top: true, left: false, center: false };
      console.log("top-center", POSITION);
      break;
    }

    case "bottom-right": {
      POSITION = { top: false, left: false, center: false };
      console.log("top-center", POSITION);
      break;
    }

    case "bottom-left": {
      POSITION = { top: false, left: true, center: false };
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
        <Left>
          <FiBell size="1.3rem" />
          <Text>{MESSAGE}</Text>
        </Left>

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
      ${pos.top ? "top: 2rem" : "bottom: 2rem"};
      opacity: 1;
    }
`;

const fadeout = (pos) => keyframes`
    from {
      ${pos.top ? "top: 2rem" : "bottom: 2rem"};
      opacity: 1;
    }
    to {
      ${pos.top ? "top: 0" : "bottom: 0"};
      opacity: 0;
    }
`;

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  z-index: 9;
  ${(props) => (props.position.top ? "top: 2rem" : "bottom: 2rem")};
  ${(props) => (props.position.center ? "left: 50%" : null)};
  ${(props) => (props.position.left ? "left: 2rem" : "right: 2rem")};
  transform: ${(props) => (props.position.center ? "translateX(-50%)" : null)};
  width: min-content;
  white-space: nowrap;

  padding: 0.625rem 1rem;
  border-radius: 0.75rem;
  background-color: hsla(200deg, 100%, 65%, 1);
  border: transparent;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  animation: ${(props) => fadein(props.position)} 0.5s,
    ${(props) => fadeout(props.position)} 0.5s ${(props) => props.timeout};
`;

const Left = styled.div`
  flex: 8;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Text = styled.p`
  font-weight: 500;
  line-height: 1.6;
  font-size: 1rem;
  margin-left: 0.875rem;
`;

const Button = styled.button`
  flex: 2;
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
    background-color: hsla(200deg, 100%, 60%, 1);
  }
`;

export default Snackbar;
