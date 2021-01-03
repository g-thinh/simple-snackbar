import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { toggleSnackbar } from "../redux/uiActions";

const Snackbar = ({ children, timeout }) => {
  const dispatch = useDispatch();
  const TIMER = (timeout - 500) / 1000 + "s";
  const SHOW = useSelector((state) => state.toggleSnackbar);

  if (SHOW) {
    setTimeout(() => {
      dispatch(toggleSnackbar());
    }, timeout);
  }

  // React.useEffect(() => {
  //   console.log("Timeout", TIMER);
  // }, []);

  return SHOW && <Bar timeout={TIMER}>{children}</Bar>;
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
  animation: fadein 0.5s, fadeout 0.5s ${(props) => props.timeout};

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
