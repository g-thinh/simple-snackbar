import React from "react";
import styled from "styled-components";
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <Wrapper>
      <p>
        Made by
        <a href="https://giathinhnguyen.com/" target="_blank" rel="noreferrer">
          {" "}
          Gia Thinh Nguyen
        </a>
      </p>
      <Links>
        <li>
          <a
            href="https://github.com/g-thinh/simple-snackbar"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size="1.3rem" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/gthinh-nguyen/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin size="1.3rem" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/GThinhNguyen"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitter size="1.3rem" />
          </a>
        </li>
      </Links>
    </Wrapper>
  );
};

// ################ FOOTER ###############

const Wrapper = styled.div`
  width: 95%;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & a {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    font-weight: bold;

    &:hover {
      color: hsla(200deg, 100%, 60%, 1);
    }
  }
`;

const Links = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  /* border: 5px solid red; */

  & li {
    padding: 0.5rem;
  }
`;

export default Footer;
