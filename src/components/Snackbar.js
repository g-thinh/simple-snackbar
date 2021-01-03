import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { toggleSnackbarClose } from "../redux/uiActions";
import { FiX } from "react-icons/fi";

const Snackbar = ({ children, timeout }) => {
  const dispatch = useDispatch();
  const TIME = (timeout - 500) / 1000 + "s";
  const SHOW = useSelector((state) => state.toggleSnackbar);

  let TIMER;
  function handleTimeout() {
    TIMER = setTimeout(() => {
      dispatch(toggleSnackbarClose());
    }, timeout);
  }

  if (SHOW) {
    handleTimeout();
  }

  function handleClose() {
    clearTimeout(TIMER);
    dispatch(toggleSnackbarClose());
  }

  // React.useEffect(() => {
  //   console.log("Timeout", TIMER);
  // }, []);

  return (
    SHOW && (
      <Bar timeout={TIME}>
        <p>{children}</p>
        <Button onClick={handleClose}>
          <FiX size="1.3rem" />
        </Button>
      </Bar>
    )
  );
};

const Bar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index: 9;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);

  width: auto;
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  background-color: hsla(200deg, 100%, 65%, 0.7);
  border: transparent;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  color: white;
  font-weight: 500;
  font-size: 18px;
  text-align: center;

  animation: fadein 0.5s, fadeout 0.5s ${(props) => props.timeout};

  &:hover {
    /* filter: brightness(0.9); */
    /* background-color: hsla(200deg, 100%, 65%, 0.8); */
  }

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
