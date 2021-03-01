import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";
import { FiPlus } from "react-icons/fi";

const FloatingActionButton = () => {
  const [position, setPosition] = useState("1rem");
  const STATE = useSelector((state) => state.toggleSnackbar);

  useEffect(() => {
    setPosition(STATE ? "5rem" : "1rem");
  }, [position, STATE]);

  return (
    <FAButton position={position}>
      <FiPlus size="1.7rem" color="white" />
    </FAButton>
  );
};

const scaleBig = keyframes`
  from {
    transform: scale(0.2);
  }
  to {
    transform: scale(1);
  }
`;

const scaleSmall = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.2);
  }
`;

const FAButton = styled.button`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  bottom: ${(props) => props.position.toString()};
  transition: bottom 0.3s ease-in-out, ${scaleBig} 0.5s, ${scaleSmall} 0.5s;

  z-index: 5000;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  border-radius: 50%;
  border: 1px solid hsl(200, 100%, 55%);
  background: hsl(200, 100%, 55%);
  height: 3.5rem;
  width: 3.5rem;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12),
    0 3px 5px -1px rgba(0, 0, 0, 0.2);
  animation: ${scaleBig} 0.5s;
  &:hover {
    background: hsl(200, 100%, 60%);
    border: 1px solid hsl(200, 100%, 60%);
  }
`;

export default FloatingActionButton;
