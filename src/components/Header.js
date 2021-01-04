import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Title>Simple Snackbar</Title>
      <Subheader>Watchout! It's a snackbar 😲</Subheader>
    </Wrapper>
  );
};

// ########### HEADER STUFF #############

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Subheader = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  font-weight: 100;
  margin: 1rem;
`;

export default Header;
